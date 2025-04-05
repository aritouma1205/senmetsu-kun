document.addEventListener('DOMContentLoaded', () => {
    const inputText = document.getElementById('inputText');
    const addButton = document.getElementById('addButton');
    const stringSelect = document.getElementById('stringSelect');
    const toggle = document.getElementById('toggle');

    
    chrome.storage.local.get('strings', (data) => {
        const strings = data.strings || [];
        strings.forEach(str => addStringToDropdown(str));
    });

    
    addButton.addEventListener('click', () => {
        const text = inputText.value.trim();
        if (text) {
            addStringToDropdown(text);
            saveString(text);
            inputText.value = ''; 
        }
    });

    
    toggle.addEventListener('click', () => {
        toggle.classList.toggle('rotated'); 
        const isVisible = stringSelect.style.display === 'block';
        stringSelect.style.display = isVisible ? 'none' : 'block'; 
    });

    
    function addStringToDropdown(str) {
        console.log(str);

        
        const stringDiv = document.createElement('div');
        stringDiv.className = 'string';

        const targetDiv = document.createElement('div');
        targetDiv.className = 'target';
        targetDiv.textContent = str;

        
        const deleteButton = document.createElement('button');
        deleteButton.textContent = '削除';
        deleteButton.className = 'delete-button';

        
        deleteButton.addEventListener('click', () => {
            deleteString(str);
            stringDiv.remove(); 
        });

        
        stringDiv.appendChild(targetDiv);
        stringDiv.appendChild(deleteButton);
        stringSelect.appendChild(stringDiv);

        console.log(stringSelect);
    }

    
    function saveString(str) {
        chrome.storage.local.get('strings', (data) => {
            const strings = data.strings || [];
            strings.push(str);
            chrome.storage.local.set({ strings });
        });
    }

    
    function deleteString(str) {
        chrome.storage.local.get('strings', (data) => {
            const strings = data.strings || [];
            const updatedStrings = strings.filter(s => s !== str);
            chrome.storage.local.set({ strings: updatedStrings });
        });
    }
});
