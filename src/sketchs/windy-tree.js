import 'p5/lib/addons/p5.dom';

const WindyTree = (p5) => {
    let brownR = 83, brownG = 53, brownB = 10;
    let greenR = 30, greenG = 147, greenB = 45;
    let fr = 15;

    let width, height;

    p5.myCustomRedrawAccordingToNewPropsHandler = (props) => {
        width = props.width ? props.width : 400;
        height = props.height ? props.height : 400;
    }

    p5.setup = () => {
        p5.createCanvas(width, height);
        p5.randomSeed(2018);
        p5.frameRate(fr);
    }

    p5.draw = () => {
        p5.background(240, 248, 255);
        p5.stroke(brownR, brownG, brownB);

        p5.push();
        p5.translate(p5.width / 2, p5.height);
        p5.branch(p5.width / 4 , p5.width / 10 / 11, p5.PI / 6);
        p5.pop();
    }

    p5.branch = (len, wei, ang) => {
        p5.strokeWeight(wei);
        p5.line(0, 0, 0, -len);
        p5.translate(0, -len);
        let r = p5.random(0.1, 0.5);
        let s = p5.random(-1, 1);

        if (len > 10) {

            p5.push();
            p5.rotate(ang + p5.PI / 12 + r * s / len);
            p5.branch(len * 0.7, wei * 0.7, ang);
            p5.pop();

            p5.push();
            p5.rotate(ang + 3 * p5.PI / 2 + r * s / len);
            p5.branch(len * 0.7, wei * 0.7, ang);
            p5.pop();

            p5.push();
            p5.rotate(ang + 3 * p5.PI / 2 + p5.PI / 9 + r * s / len);
            p5.branch(len * 0.3, wei * 0.7, ang);
            p5.pop();

            p5.push();
            p5.rotate(ang + p5.PI / 6 + r * s / len);
            p5.branch(len * 0.3, wei * 0.7, ang);
            p5.pop();

        } else {
            p5.fill(greenR, greenG, greenB);
            p5.noStroke();
            p5.ellipse(0, 0, 15, 6);
            p5.rotate(p5.PI);
            p5.ellipse(0, 0, 14, 5);
        }
    }
}

export default WindyTree;
