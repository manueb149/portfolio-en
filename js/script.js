// Select all sections
const sections = document.querySelectorAll('.section');
// Select all links from sidebar
const tiles = document.querySelectorAll('.nav-link');
// Select skin theme
const skin = document.querySelectorAll('.body-skin');
// Select al style dots
const styles = document.querySelectorAll('.alt-style');
// Actual style color
const styleColors = { 
    blue: '2196f3',
    green: '72b626',
    orange: 'fa5b0f',
    pink: 'ec1839',
    yellow: 'ffb400'
};
var actualColor = '2196f3';
// Set te color style
function setActiveStyle(color) {
    for (let i = 0; i < styles.length; i++) {
        if (color == styles[i].getAttribute('title')) {
            if(actualColor !== styleColors[color]){
                document.querySelectorAll('.progressBar').forEach( child => {
                    child.childNodes.forEach( child => child.remove());
                })
                actualColor = styleColors[color];
                animeteCircles();
            }
            styles[i].removeAttribute('disabled');
        } else {
            styles[i].setAttribute('disabled', 'true');
        }
    }
}

// Set theme between light and dark
document.querySelector('.cog-box').addEventListener('click', () => {
    document.querySelector('.style-switcher').classList.toggle('open');
});
for (let i = 0; i < skin.length; i++) {
    skin[i].addEventListener('change', (e) => {
        if (e.target.value === 'Dark') {
            document.body.classList.add('dark');
        } else {
            document.body.classList.remove('dark');
        }
    })
}

// Select active section
function selectSection(section) {
    event.preventDefault();
    for (let i = 0; i < sections.length; i++) {
        if (section === sections[i].getAttribute('title')) {
            sections[i].classList.remove('hidden');
            sections[i].classList.add('section-active');
            tiles[i].classList.add('active');
            if (section === 'Contact') {
                sections[4].scrollIntoView({ behavior: 'smooth' });
            }
        } else {
            sections[i].classList.add('hidden');
            sections[i].classList.remove('section-active');
            tiles[i].classList.remove('active');
        }
    }
}


function animeteCircles(){
    var circleHTML = new ProgressBar.Circle('#progressCircHTML', {
        strokeWidth: 10,
        easing: 'easeInOut',
        duration: 1400,
        color: `#${actualColor}`,
        trailColor: '#eeecec',
        trailWidth: 1,
        svgStyle: null,
        step: function(state, circle, attachment) {
            circle.path.setAttribute('stroke-linecap', 'round');
        }
    });
    var circleCSS = new ProgressBar.Circle('#progressCircCSS', {
        strokeWidth: 10,
        easing: 'easeInOut',
        duration: 1400,
        color: `#${actualColor}`,
        trailColor: '#eeecec',
        trailWidth: 1,
        svgStyle: null,
        step: function(state, circle, attachment) {
            circle.path.setAttribute('stroke-linecap', 'round');
        }
    });
    var circleJS = new ProgressBar.Circle('#progressCircJS', {
        strokeWidth: 10,
        easing: 'easeInOut',
        duration: 1400,
        color: `#${actualColor}`,
        trailColor: '#eeecec',
        trailWidth: 1,
        svgStyle: null,
        step: function(state, circle, attachment) {
            circle.path.setAttribute('stroke-linecap', 'round');
        }
    });
    var circleNode = new ProgressBar.Circle('#progressCircNode', {
        strokeWidth: 10,
        easing: 'easeInOut',
        duration: 1400,
        color: `#${actualColor}`,
        trailColor: '#eeecec',
        trailWidth: 1,
        svgStyle: null,
        step: function(state, circle, attachment) {
            circle.path.setAttribute('stroke-linecap', 'round');
        }
    });
    var circleReact = new ProgressBar.Circle('#progressCircReact', {
        strokeWidth: 10,
        easing: 'easeInOut',
        duration: 1400,
        color: `#${actualColor}`,
        trailColor: '#eeecec',
        trailWidth: 1,
        svgStyle: null,
        step: function(state, circle, attachment) {
            circle.path.setAttribute('stroke-linecap', 'round');
        }
    });
    var circlePython = new ProgressBar.Circle('#progressCircPython', {
        strokeWidth: 10,
        easing: 'easeInOut',
        duration: 1400,
        color: `#${actualColor}`,
        trailColor: '#eeecec',
        trailWidth: 1,
        svgStyle: null,
        step: function(state, circle, attachment) {
            circle.path.setAttribute('stroke-linecap', 'round');
        }
    });
    circleHTML.animate(0.8);    
    circleCSS.animate(0.65);
    circleJS.animate(0.70);
    circleNode.animate(0.55);
    circleReact.animate(0.76);
    circlePython.animate(0.60);
}

animeteCircles();
