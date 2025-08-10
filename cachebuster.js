(function(){
    const appendVersion = (file) => `${file}?v=${new Date().getTime()}`;
    
    // Bust CSS cache
    document.querySelectorAll('link[rel="stylesheet"]').forEach(link => {
        link.href = appendVersion(link.getAttribute('href'));
    });

    // Bust JS cache (except this file itself)
    document.querySelectorAll('script[src]').forEach(script => {
        if (!script.src.includes('cachebuster.js')) {
            let newScript = document.createElement('script');
            newScript.src = appendVersion(script.getAttribute('src'));
            newScript.defer = true;
            document.body.appendChild(newScript);
            script.remove();
        }
    });
})();
