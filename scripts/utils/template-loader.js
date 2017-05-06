import Handlebars from 'handlebars';

let loader = (() => {
    function getHTML(fileName) {
        return new Promise(function(resolve, rejcet) {
            let url = `/templates/html/$(fileName}.html`;

            $.get(url, function(file) {
                    resolve(file);
                })
                .done(resolve)
                .fail(reject);
        });
    }

    function getTemplate(templateName) {
        return new Promise(function(resolve, reject) {
            let url = `/templates/handlebars/${templateName}.handlebars`;

            $.get(url, function(templateHTML) {
                    let template = Handlebars.compile(templateHTML);
                    resolve(template);
                })
                .done(resolve)
                .fail(reject);
        });
    }

    return {
        getHTML,
        getTemplate
    };
})();

export default loader;