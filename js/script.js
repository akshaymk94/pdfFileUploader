$(document).ready(function() {
    
    
    
    $('body').on('change','#fileUploader', function(e) {
        var fileName = e.target.files[0].name;
        console.log("selected file : " + fileName);
    });
    
    $('body').on('click','.btnUpload', function() {
        var canvasPDF = '<div class="canvasEditor">\
                            <object id="fileRenderer" data="simplefile.pdf"></object>\
                            <div class="viewTextEditor">\
                                <div class="somethingHere">This is a big bad div, filling up the space!</div>\
                                <textarea id="textEditor"></textarea>\
                            </div>\
                        </div>';
        $('#box').hide();
        $('#PDFviewer').append(canvasPDF);
       
        convertToCkEditor();
        
        
        
    });
    
    function convertToCkEditor() {
        var ckeditor = CKEDITOR.replace("textEditor", {
                extraPlugins: 'mathjax',
                mathJaxLib: 'http://cdn.mathjax.org/mathjax/2.6-latest/MathJax.js?config=TeX-AMS_HTML',
                height: 300,
                width:630
            });
    }
});


/*
<button type="button" class="applyChanges">Apply</button>\
                                <button type="button" class="cancelChanges">Cancel</button>\*/
