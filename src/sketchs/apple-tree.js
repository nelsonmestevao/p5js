const AppleTree = (p5) => {
    let brownR = 83, brownG = 53, brownB = 10;
    let greenR = 30, greenG = 147, greenB = 45;
    let redR = 100, redG = 3, redB = 0;

    let width, height;
    let x_random;

    p5.myCustomRedrawAccordingToNewPropsHandler = (props) => {
        width = props.width ? props.width : 400;
        height = props.height ? props.height : 400;
    }

    p5.setup = () => {
        p5.createCanvas(width, height);
        p5.randomSeed(2019);
        p5.noLoop();
    }

    p5.draw = () => {
        p5.background(240, 248, 255);
        p5.stroke(brownR, brownG, brownB);
        p5.strokeWeight(20);

        p5.push();
            p5.translate(p5.width/2, p5.height);
            p5.branch(p5.width/5, 10, p5.PI/6);
        p5.pop();
    }

    p5.branch = (len, wei, ang) => {
        p5.line(0, 0, 0, -len);
        p5.translate(0,-len);
        p5.stroke(brownR, brownG, brownB);
        p5.strokeWeight(wei);

        if (len > 4) {

            p5.push();
                p5.rotate(ang);
                p5.branch(len * 0.7, wei * 0.7, ang);
            p5.pop();

            p5.push();
                p5.rotate(-ang - p5.PI/12);
                p5.branch(len * 0.7, wei * 0.7, ang);
            p5.pop();

            p5.push();
                p5.rotate(-ang);
                p5.branch(len * 0.3, wei * 0.7, ang);
            p5.pop();

            p5.push();
                p5.rotate(ang + p5.PI/10);
                p5.branch(len * 0.3, wei * 0.7, ang);
            p5.pop();

        } else {

            x_random = p5.random(0,1);

            if (x_random > 0.85) {
                p5.fill(greenR, greenG, greenB);
                p5.noStroke();
                p5.ellipse(0, 0, 14, 6);

            } else if (x_random < 0.01) {
                p5.fill(redR, redG, redB);
                p5.noStroke();

                p5.ellipse(16, 16, 16, 16);
            }
        }
    }
}

export default AppleTree;
