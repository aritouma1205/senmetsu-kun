
const targetNode = document.body;
const config = { childList: true, subtree: true };

const callback = (mutationsList, observer) => {
    for (const mutation of mutationsList) {
        if (mutation.type === 'childList') {
            const posts = document.querySelectorAll('article');
            if (posts.length > 0) {
                updateVisiblePosts(posts);
            }
        }
    }
};

function updateVisiblePosts(posts) {
    chrome.storage.local.get('strings', (data) => {
        if (chrome.runtime.lastError) {
            console.error('ストレージの取得中にエラーが発生:', chrome.runtime.lastError);
            return;
        }
        const strings = data.strings || [];

        posts.forEach(post => {
            const postText = post.innerText;
            console.log(postText);
        
            const matched = strings.some(string => postText.includes(string));
            console.log(matched);

            if (matched) {
                post.style.display = 'none';
            } else {
                post.style.display = '';
            }
        });
    });
}

const observer = new MutationObserver(callback);
observer.observe(targetNode, config);

chrome.runtime.onMessage.addListener((request, sender, sendResponse) => {
    if (request.action === "updatePosts") {
        const posts = document.querySelectorAll('article');
        updateVisiblePosts(posts);
    }
});

chrome.storage.onChanged.addListener((changes, namespace) => {
    if (changes.strings) {
        const posts = document.querySelectorAll('article');
        updateVisiblePosts(posts);
    }
});

window.addEventListener('click', () => {
    const posts = document.querySelectorAll('article');
    updateVisiblePosts(posts);
});

window.addEventListener('scroll', () => {
    const posts = document.querySelectorAll('article');
    updateVisiblePosts(posts);
});
