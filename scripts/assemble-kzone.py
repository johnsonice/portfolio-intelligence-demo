"""Assemble the isolated K.zone design study after the continuity modules."""
from pathlib import Path
import re, html, subprocess, colorsys

root = Path(__file__).resolve().parent.parent
subprocess.run(['python3', str(root/'scripts/assemble-continuity.py')], check=True)
p = root/'dist/index.html'
outer = p.read_text()
m = re.search(r'srcdoc="([\s\S]*?)"', outer)
s = html.unescape(m[1])
s = re.sub(r'<style id="kzone-design">[\s\S]*?</style>', '', s)
s = re.sub(r'<script id="kzone-theme">[\s\S]*?</script>', '', s)

def color(match, prop):
    hx=match.group()[1:]
    if len(hx) in (3,4): hx=''.join(c*2 for c in hx)
    r,g,b=[int(hx[i:i+2],16)/255 for i in (0,2,4)]
    h,l,sat=colorsys.rgb_to_hls(r,g,b)
    alpha=int(hx[6:8],16)/255 if len(hx)==8 else 1
    if 'shadow' in prop: return match.group()
    if alpha<.3: token='line' if 'border' in prop else 'tint'
    elif 'border' in prop or 'outline' in prop: token='edge' if l<.58 else 'line'
    elif l>.88: token='paper' if l>.975 else 'panel'
    elif l>.73: token='panel' if 'background' in prop else 'faint'
    elif sat>.2 and (.08<h<.17 or h>.94): token='warn'
    elif sat>.18 and .18<h<.49: token='ok'
    elif prop in ('background','background-color'): token='ink' if l<.66 else 'tint'
    else: token='text' if l<.43 else 'muted'
    return 'var(--kz-'+token+')'

def normalize_style(match):
    css=match[2]
    def decl(m):
        prop,value=m.groups()
        value=re.sub(r'#[0-9a-fA-F]{8}\b|#[0-9a-fA-F]{6}\b|#[0-9a-fA-F]{4}\b|#[0-9a-fA-F]{3}\b',lambda c:color(c,prop),value)
        value=re.sub(r'\bwhite\b','var(--kz-paper)',value)
        value=re.sub(r'\bblack\b','var(--kz-text)',value)
        value=value.replace('Georgia,serif','var(--kz-sans)').replace('Inter,Arial,sans-serif','var(--kz-sans)')
        return prop+':'+value
    css=re.sub(r'([\w-]+)\s*:\s*([^;{}]+)',decl,css)
    return match[1]+css+match[3]
s=re.sub(r'(<style[^>]*>)([\s\S]*?)(</style>)',normalize_style,s)
s=s.replace('Priority exploration · Simulated agent · Synthetic data','K.zone design study · Simulated agent · Synthetic data')
s=s.replace('THL Portfolio Intelligence — Priority Exploration','THL Portfolio Intelligence — K.zone Design Study')
old='<span>Free-form requests · English / 中文</span>'
new='<div class="kz-appearance"><span>PORTFOLIO / OPERATING DESK</span><button type="button" id="kz-theme-toggle" aria-label="Switch to dark appearance"><span>Light</span></button></div>'
if old in s: s=s.replace(old,new,1)
# Actual chart series keep meaning and use the same muted palette in both themes.
palette={'#2863c8':'var(--kz-chart-cost)','#2463c5':'var(--kz-chart-cost)','#326bcc':'var(--kz-chart-cost)','#5a82bc':'var(--kz-chart-cost)','#278577':'var(--kz-chart-revenue)','#258e89':'var(--kz-chart-revenue)','#2a8c87':'var(--kz-chart-revenue)','#b5cbe8':'var(--kz-chart-other)','#9272b4':'var(--kz-warn)','#dce6f2':'var(--kz-line)','#e3eaf3':'var(--kz-line)','#e5ebf3':'var(--kz-line)','#e0e8f3':'var(--kz-line)'}
for old,new in palette.items():
    s=re.sub(re.escape(old)+r'(?![0-9a-fA-F])',new,s,flags=re.I)
s=s.replace("'42,140,135':'50,107,204'", "'100,131,115':'83,108,122'")
s=s.replace('</body>','<style id="kzone-design">'+(root/'src/kzone.css').read_text()+'</style><script id="kzone-theme">'+(root/'src/kzone-theme.js').read_text()+'</script></body>')
outer=outer[:m.start(1)]+html.escape(s,quote=True)+outer[m.end(1):]
outer=outer.replace('THL Portfolio Intelligence — Priority Exploration','THL Portfolio Intelligence — K.zone Design Study')
outer=re.sub(r'<script id="kzone-theme-storage">[\s\S]*?</script>','',outer)
outer=outer.replace('</body>','<script id="kzone-theme-storage">'+(root/'src/kzone-theme-storage.js').read_text()+'</script></body>')
p.write_text(outer)
print('Assembled K.zone light/dark design study.')
