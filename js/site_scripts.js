var photos = []; //declare an empty array to store image element
            var fileName = []; //declare an empty element to store image file names
            var imageList = []; //declare an empty array to store html list that contain an image
            var image; //declare an empty variable to store the assembled image list codes
            var openList = "<li class='partner'>"; //declare a variable to contain open list tag
            var closeList = "</li>"; //declare a variable to contain close list tag

            //create a loop to create 6 images starting with index of 0
            for (var i=0; i<6; i++) {
                fileName.push("partner"+(i+1)); //create image file name and store in the array
                photos.push("<img src='partners/" + fileName[i] + ".png'>"); //assemble file name into image element and store in an array
                image = openList + photos[i] + closeList; //assemble image element from array with list element and store in a variable
                imageList.push(image); //store (push) the assemble list codes into an array
            }

            //display all six codes store in the array
            document.getElementById("partners").innerHTML = imageList;