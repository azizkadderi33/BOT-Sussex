
const fs = require('fs');
const path = require('path');

const commandsDir = './modules/commands';

function updateCreditsInFile(filePath) {
    try {
        let content = fs.readFileSync(filePath, 'utf8');
        
        // أنماط مختلفة للبحث عن credits
        const patterns = [
            /credits:\s*"[^"]*"/g,
            /credits:\s*'[^']*'/g,
            /credits:\s*`[^`]*`/g
        ];
        
        let updated = false;
        
        patterns.forEach(pattern => {
            if (pattern.test(content)) {
                content = content.replace(pattern, 'credits: "ساسكي"');
                updated = true;
            }
        });
        
        if (updated) {
            fs.writeFileSync(filePath, content, 'utf8');
            console.log(`✅ تم تحديث: ${filePath}`);
        }
    } catch (error) {
        console.log(`❌ خطأ في ملف: ${filePath} - ${error.message}`);
    }
}

function scanDirectory(dir) {
    const files = fs.readdirSync(dir);
    
    files.forEach(file => {
        const fullPath = path.join(dir, file);
        const stat = fs.statSync(fullPath);
        
        if (stat.isDirectory()) {
            scanDirectory(fullPath);
        } else if (file.endsWith('.js')) {
            updateCreditsInFile(fullPath);
        }
    });
}

console.log('🔍 بدء فحص وتصحيح ملفات الأوامر...');
scanDirectory(commandsDir);
console.log('✨ تم الانتهاء من تصحيح جميع الملفات!');
