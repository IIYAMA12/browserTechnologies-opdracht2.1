(function (){
    var inputElement = document.getElementById("image-preview").getElementsByTagName("input")[0];

    inputElement.removeAttribute("disabled");
    
    inputElement.addEventListener("change", function (e) {
        var fileList = this.files;

        if ("FileReader" in window) {
            // https://developer.mozilla.org/en-US/docs/Web/API/FileReader
            var reader = new FileReader();
            reader.onload = (function(image) {
                return function(e) {
                    image.src = e.target.result;
                };
            })(document.querySelector("#image-preview img"));

            reader.readAsDataURL(fileList[0]);
        } else {
            console.log("Ops this feature isn't available");
        }
    });
})();
