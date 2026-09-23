from pathlib import Path
import re,html,subprocess,tempfile
root=Path(__file__).resolve().parent.parent
p=root/'dist/index.html';outer=p.read_text();m=re.search(r'srcdoc="([\s\S]*?)"',outer);assert m
s=html.unescape(m.group(1))
s=re.sub(r'/\* CT_EXTENSION_START \*/[\s\S]*?/\* CT_EXTENSION_END \*/','',s)
s=re.sub(r'<style id="continuity-design">[\s\S]*?</style>','',s)
marker=' seedTaskHistory();stashSession();initOperations();'
assert s.count(marker)==1
s=s.replace(marker,marker+'\n/* CT_EXTENSION_START */\n'+(root/'src/continuity.js').read_text()+'\n/* CT_EXTENSION_END */')
s=s.replace('</body>','<style id="continuity-design">'+(root/'src/continuity.css').read_text()+'</style></body>')
outer=outer[:m.start(1)]+html.escape(s,quote=True)+outer[m.end(1):]
outer=re.sub(r'<script id="continuity-storage">[\s\S]*?</script>','',outer)
outer=outer.replace('</body>','<script id="continuity-storage">'+(root/'src/continuity-storage.js').read_text()+'</script></body>')
p.write_text(outer)
for i,js in enumerate(re.findall(r'<script[^>]*>([\s\S]*?)</script>',s)):
    if js.strip():
        q=Path(tempfile.gettempdir())/f'pe-continuity-check-{i}.js';q.write_text(js);subprocess.run(['node','--check',str(q)],check=True)
print('Assembled standalone site and checked embedded JavaScript.')
