About portfolio:
Portfolio is accessible at http://gangabm.github.io/
You can navigate to the other pages by clicking on the hyperlinks on the main page


To run the Gruntfile.js, the following plugins should be installed:
grunt ^0.4.5,
grunt-contrib-cssmin ^0.14.0,
grunt-contrib-htmlmin ^0.6.0,
grunt-contrib-imagemin ^0.1.9,
grunt-contrib-uglify ^0.11.0,
grunt-cssbeautifier ^0.1.2,
grunt-express ^1.4.1,
grunt-image-resize 0.0.4,
grunt-inline-css ^0.1.5,
grunt-jsbeautifier ^0.2.10,
grunt-responsive-images ^0.1.7


optimizations made in main.js
The following functions have been changed:

1. document.addEventListener - changed the number of items from 200 to 24 in the for loop to stop the rendering of unnecessary pizzas.
2. changePizzaSizes - pulled out i, dx and newWidth variables outside the loop since newWidth gives a constant value.
3. updatePositions - i)pulled out items outside the function
ii) pulled out document.body.scrollTop outside the loop to avoid accessing DOM repeatedly
iii) initiated another loop to make an array of 5 constant phase values.
iv) Used transform:translateX instead of left.

Used DOM accessing functions like getElementsByClassName and getElementById instead of querySelectorAll and querySelector.
