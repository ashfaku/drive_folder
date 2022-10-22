var myState = {
    pdf: null,
    currentPage: 100,
    zoom: 1
}
function back()
{
    myState.currentPage--;
    render();
}
function forward()
{
    myState.currentPage++;
    render();
}
function render()
{
    for (let i = 1; i < myState.pdf.numPages; i++)
        renderPage(i);
}
function renderPage(num) {

    myState.pdf.getPage(num).then((page) => {
        var id = "canvas-" + num;
        var canvas = document.createElement("canvas");
        canvas.id = id;
        document.getElementById("canvas_container").appendChild(canvas);
    // var canvas = document.getElementById("pdf_renderer");
        var ctx = canvas.getContext('2d');

        var viewport = page.getViewport(1);

        canvas.width = viewport.width;
        canvas.height = viewport.height;
    
        page.render({
            canvasContext: ctx,
            viewport: viewport
        });
    });   
}

pdfjsLib.getDocument('./Data Structures and Algorithms in Java, 6th Edition, 2014.pdf')
.then((pdf) => {
    myState.pdf = pdf;
    render();
});