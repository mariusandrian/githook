$(() => {
    //Grabbing Elements
    const $openBtn = $('.edit');
    const $modal = $('#modal');
    const $closeBtn = $('#close');

    //Event Handlers
    const openModal = () => {
        $modal.css('display', 'block');
        console.log($(event.target).siblings(".card-text").text());
        $('textarea#text-area').val($(event.target).siblings(".card-text").text());
    }
    
    const closeModal = () => {
        $modal.css('display', 'none');
    }
    
    //Event Listeners
    $openBtn.on('click', openModal);
    
    $closeBtn.on('click', closeModal);

    //Get text area default value
    

    $('.close').on("click",event => {
        console.log($(event.target).parent().parent().parent().parent());
        $(event.target).parent().parent().parent().parent().remove();
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
            $(event.target).parent().parent().parent().parent().remove();
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

