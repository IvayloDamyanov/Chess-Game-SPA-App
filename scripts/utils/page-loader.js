import loader from 'template-loader';

let pageLoader = (function() {
    function loadPage(fileName, targetSelector) {
        return loader
            .getHTML(fileName)
            .then((file) => {
                targetSelector.html(file);
            })
            .catch(err => Promise.reject(err));
    }

    function loadTemplatePage(templateName, templateData, targetSelector) {
        return Promise.all([loader.getTemplate(templateName), templateData])
            .then(([template, data]) => {
                const html = template(data);
                targetSelector.html(html);
            })
            .catch(err => Promise.reject(err));
    }

    return {
        loadPage,
        loadTemplatePage
    };

}());

export default pageLoader;