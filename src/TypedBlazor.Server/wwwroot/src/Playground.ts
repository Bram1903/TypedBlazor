import p5 from 'p5';

export function initialiseDrawer() {
    const sketch = (p: p5) => {
        p.setup = () => {
            const container: HTMLElement | null = document.getElementById('canvasContainer');
            if (!container) {
                throw new Error('Could not find canvas container');
            }

            const {width} = container.getBoundingClientRect();
            const height = (width * 9) / 16;

            p.createCanvas(width, height, p.WEBGL).parent('canvasContainer');
            p.angleMode(p.DEGREES);
            p.strokeWeight(5);
            p.noFill();
            p.stroke(32, 8, 64);
            p.describe('Users can click on the screen and drag to adjust their perspective in 3D space. The space contains a sphere of dark purple cubes on a light pink background.');
        };

        p.draw = () => {
            p.background(250, 180, 200);
            p.orbitControl();

            for (let zAngle = 0; zAngle < 180; zAngle += 30) {
                for (let xAngle = 0; xAngle < 360; xAngle += 30) {
                    p.push();

                    p.rotateZ(zAngle);
                    p.rotateX(xAngle);

                    p.translate(0, 400, 0);
                    p.box();
                    p.pop();
                }
            }
        };

        p.windowResized = () => {
            const container: HTMLElement | null = document.getElementById('canvasContainer');
            if (container) {
                const {width} = container.getBoundingClientRect();
                const height = (width * 9) / 16;
                p.resizeCanvas(width, height);
            }
        };
    };

    new p5(sketch);
}
