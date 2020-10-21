function setup() {
    createCanvas(windowWidth, windowHeight)
    //background(255, 255, 255)
    background(0,0,0)
}

function draw() {
    background(0,0,0)
    fill(random(100,255),random(100,255),random(100,255))
    RenderFlag(windowWidth, windowHeight)
}

function windowResized() {
    resizeCanvas(windowWidth, windowHeight)
}

function RenderFlag(windowWidth, windowHeight) {

    let flag_width = windowWidth-windowWidth*0.25

    let origin_x = (windowWidth - flag_width)/2
    let flag_height = flag_width/1.9
    let origin_y = (windowHeight - flag_height)/2

    let flag_stripe = flag_height/13

    let flag_union_width = flag_height * 0.76
    let flag_union_height = flag_height * 0.5385

    let star_outer_radius = flag_stripe * 0.40

    noStroke()

    // draw flag body
    rect(origin_x, origin_y, flag_width, flag_height)

    // draw stripes
    for(let stripe=0; stripe<7; stripe++){
        fill(random(100,255),0,0)
        rect(origin_x, origin_y+flag_stripe*2*stripe, flag_width, flag_stripe)
    }

    // draw union
    fill(random(25), random(100), 200)
    noStroke()
    rect(origin_x, origin_y, flag_union_width, flag_union_height)

    let union_origin_x = origin_x
    let union_origin_y = origin_y
    let x_offset = union_origin_x+star_outer_radius*1.6
    let y_offset = union_origin_y+star_outer_radius*1.6

    // draw stars
    for(let _y=0; _y<9; _y++){

        if(_y%2 == 0){
            for (let _x=0; _x<6; _x++){
                DrawStar(x_offset+(_x*star_outer_radius*4.3), y_offset+_y*star_outer_radius*1.8, star_outer_radius)
            }
        }
        else {
            for (let _x=0; _x<5; _x++){
                DrawStar(x_offset+star_outer_radius*2+_x*star_outer_radius*4.3, y_offset+_y*star_outer_radius*1.8, star_outer_radius)
            }
        }

    }


}

function DrawStar(center_x, center_y, outer_radius) {

    const inner_radius = outer_radius/2.618034            //1 plus Golden ratio

    fill(random(180,255),random(180,255),random(180,255))
    noStroke()
    // Stroke(1)
    beginShape()

    //console.log("x:"+center_x+" y:"+center_y)

    for(let count=0; count<10; count++){

        let degrees = count*36
        if(count%2==0){
            current_radius = outer_radius
        }
        else {
            current_radius = inner_radius
        }

        let x = current_radius * Math.sin(degrees* Math.PI / 180)
        let y = current_radius * Math.cos(degrees* Math.PI / 180)
        console.log("x:"+x+" y:"+y)
        vertex(center_x+x, center_y-y)
    }

    endShape()
}
