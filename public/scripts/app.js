$(() => {
    //Grabbing Elements
    const $openBtn = $('.edit');
    const $modal = $('#modal');
    const $closeBtn = $('#close');

    //Event Handlers
    const openModal = () => {
        $modal.css('display', 'block');
        // console.log($(event.target).siblings(".card-text").text());
        $('textarea#text-area').val($(event.target).siblings(".card-text").text());
        // console.log($(event.target).siblings("#note-id").text())
        $('.note-form').attr("action","/notes/" + $(event.target).siblings("#note-id").text() + "?_method=PUT");
    }
    
    const closeModal = () => {
        $modal.css('display', 'none');
    }
    
    //Event Listeners
    $openBtn.on('click', openModal);
    
    $closeBtn.on('click', closeModal);

    // New Note button AJAX call
    $('#new-note').on('click', event => {
        $.post("/notes", () => {
            console.log("clicked new notes");
        })
            .done(() => {
                console.log("finished post request");
                window.location.href = "/";
            })
            .fail(() => {
                alert("unable to create new notes, please try again later.")
            });
    });  

    $('.close').on("click",event => {
        console.log($(event.target).parent().parent().parent().parent());
        $(event.target).parent().parent().parent().remove();
    });
    
    $('#new').click(event => {
        $('#right-column > #new-card')
            .before(`
            <div class="card bg-light mb-3 note" style="max-width: 18rem;">
                <div class="card-body">
                    <p class="card-text">Add your notes here</p>
                    <button type="button" class="close" aria-label="Close">
                    <span aria-hidden="true">&times;</span>
                    </button>
                    <button type="button" class="btn btn-info edit">Edit</button>
                </div>
            </div>`
        );

        $('.close').on("click",event => {
            console.log($(event.target).parent().parent().parent().parent());
            $(event.target).parent().parent().parent().remove();
        });

        //Grabbing Elements
        const $openBtn = $('.edit');
        const $modal = $('#modal');
        const $closeBtn = $('#close');

        //Event Handlers
        const openModal = () => {
            $modal.css('display', 'block');
        }
        
        const closeModal = () => {
            $modal.css('display', 'none');
        }
        
        //Event Listeners
        $openBtn.on('click', openModal);
        
        $closeBtn.on('click', closeModal);
       
    });
});

