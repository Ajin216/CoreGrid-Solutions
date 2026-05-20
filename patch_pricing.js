const fs = require('fs');
const glob = require('glob');

const files = glob.sync('src/app/pages/services/**/*.component.ts');

const customCard = `
            <!-- Custom -->
            <div class="relative bg-[rgba(15,22,55,0.7)] backdrop-blur-sm border border-[#324AB3] rounded-2xl p-8 flex flex-col hover:border-[#00E5C3]/50 transition-all duration-300 shadow-lg">
              <div class="mb-6">
                <div class="text-xs font-mono text-[#7B61FF] uppercase tracking-widest mb-2">// Custom</div>
                <div class="text-4xl font-heading font-bold text-white mb-1">Tailored</div>
                <div class="text-white text-sm">Built to your specifications</div>
              </div>
              <ul class="flex flex-col gap-3 text-sm text-white flex-grow mb-8">
                <li class="flex items-start gap-2"><span class="text-[#00E5C3] mt-0.5">✓</span> Bespoke Strategy & Planning</li>
                <li class="flex items-start gap-2"><span class="text-[#00E5C3] mt-0.5">✓</span> Dedicated Project Manager</li>
                <li class="flex items-start gap-2"><span class="text-[#00E5C3] mt-0.5">✓</span> Complex & Custom Integrations</li>
                <li class="flex items-start gap-2"><span class="text-[#00E5C3] mt-0.5">✓</span> Enterprise-Grade Security</li>
                <li class="flex items-start gap-2"><span class="text-[#00E5C3] mt-0.5">✓</span> 24/7 Priority Support & SLA</li>
              </ul>
              <a routerLink="/contact" class="block text-center border border-[#00E5C3] text-[#00E5C3] font-semibold py-3 rounded-xl hover:bg-[#00E5C3] hover:text-[#0F1637] transition-all duration-300">Contact Us →</a>
            </div>
          </div>`;

files.forEach(file => {
    let content = fs.readFileSync(file, 'utf8');
    
    // Change grid columns
    content = content.replace(
        '<div class="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-6xl mx-auto">',
        '<div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 max-w-7xl mx-auto">'
    );
    
    // Insert new card before the end of the grid
    if (!content.includes('// Custom</div>')) {
        content = content.replace(/<\/div>\s*<\/div>\s*<div class="text-center">/, match => {
            return customCard + '\n        </div>\n        <div class="text-center">';
        });
        fs.writeFileSync(file, content);
        console.log('Patched ' + file);
    }
});
