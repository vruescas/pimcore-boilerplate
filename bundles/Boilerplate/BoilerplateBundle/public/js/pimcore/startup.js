pimcore.registerNS("pimcore.plugin.BoilerplateBoilerplateBundle");

pimcore.plugin.BoilerplateBoilerplateBundle = Class.create({

    initialize: function () {
        document.addEventListener(pimcore.events.pimcoreReady, this.pimcoreReady.bind(this));
    },

    pimcoreReady: function (e) {
        // alert("BoilerplateBoilerplateBundle ready!");
    }
});

var BoilerplateBoilerplateBundlePlugin = new pimcore.plugin.BoilerplateBoilerplateBundle();
