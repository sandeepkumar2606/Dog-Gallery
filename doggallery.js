var getimage = $('#getimage');


$.get('https://dog.ceo/api/breeds/list/all', function (data) {
    let breeds = data.message;

    for (let breed in breeds) {
        $('#dropdown').append('<option val="' + breed + '">' + breed + '</option>');
    }

});



$('#dropdown').change(function () {
    // e.preventDefault();

    // $('#outercontainer').empty();
    $('#seconddropdown').remove();
    // $('#seconddropdown').remove();

    let breedvalue = $('#dropdown').val();

    // let imageurl = 'https://dog.ceo/api/breed/' + breedvalue;

    // $.get(imageurl, function (data) {
    //     let images = data.message;

    //     for (let imagepath of images) {

    //         $('#outercontainer').append('<div id="innerdiv" style="height:400px; border:2px double black; margin:1.2rem; width:418px;"> <img src=" ' + imagepath + ' " height="100%" width="100%" alt=" ' + imagepath + ' "></div>');
    //     }

    // });


    let suburl = 'https://dog.ceo/api/breed/' + breedvalue + '/list';

    $.get(suburl, function (data) {

        if (data.message.length !== 0) {

            let images = data.message;

            // if (images.length == 0) {
            //     alert('No subbreed found for this breed');
            //     return;
            // }

            $('#dropdown').after('<select id="seconddropdown"></select>');
            

            for (let breed of images) {
                $('#seconddropdown').append('<option val="' + breed + '">' + breed + '</option>');
                console.log(breed);

            }
        }

    });
});



getimage.click(function (e) {
    e.preventDefault();

    // $('#outercontainer').empty();

    let breedvalue = $('#dropdown').val();
    let valueofsecond = $('#seconddropdown').val();


    let finalurl = 'https://dog.ceo/api/breed/' + breedvalue;

    if (valueofsecond !== undefined) {
        finalurl += '/' + valueofsecond;
    }

    finalurl += '/images';

    $('#outercontainer').empty();


    $.get(finalurl, function (data) {
        let allimages = data.message;

        for (let image of allimages) {
            $('#outercontainer').append('<div id="innerdiv" style="height:400px; border:2px double black; border-radius: 2rem; margin:1.2rem; width:418px;"> <img src=" ' + image + ' " height="100%" width="100%" style="border-radius:2rem" alt=" ' + image + ' "></div>');

        }

    });


});









