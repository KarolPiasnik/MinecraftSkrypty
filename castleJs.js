function buildMainChunk(width:number, lenght:number, height:number)  {
    builder.mark()
    for(let i = 0; i <= height/2; i++){
        
        builder.move(FORWARD, width-1)
        builder.move(LEFT, lenght-1)
        builder.move(BACK, width-1)
        builder.move(RIGHT, lenght-1)
        builder.move(UP, 1)
    }
    builder.tracePath(MOSSY_STONE_BRICKS)
    builder.mark()
    for(let i = height/2; i <= height; i++){
        
        builder.move(FORWARD, width-1)
        builder.move(LEFT, lenght-1)
        builder.move(BACK, width-1)
        builder.move(RIGHT, lenght-1)
        builder.move(UP, 1)
    }
    builder.tracePath(STONE_BRICKS)
    builder.place(AIR)
}

function buildWaterPit(width:number, length:number) {
    builder.move(BACK, 2)
    builder.move(LEFT, 2)
    builder.move(DOWN, 1)

    for(let i = 0;i<width+3;i++) {
        builder.place(WATER)
        builder.move(FORWARD, 1)
    }
    builder.turn(TurnDirection.Left)
    for(let i = 0;i<length+3;i++) {
        builder.place(WATER)
        builder.move(FORWARD, 1)
    }
    builder.turn(TurnDirection.Left)
    for(let i = 0;i<width+3;i++) {
        builder.place(WATER)
        builder.move(FORWARD, 1)
    }
    builder.turn(TurnDirection.Left)
    for(let i = 0;i<length+3;i++) {
        builder.place(WATER)
        builder.move(FORWARD, 1)
    }
    builder.turn(TurnDirection.Left)
    builder.move(FORWARD, 1)
    builder.move(LEFT, 1)
    for(let i = 0;i<width+1;i++) {
        builder.place(WATER)
        builder.move(FORWARD, 1)
    }
    builder.turn(TurnDirection.Left)
    for(let i = 0;i<length+1;i++) {
        builder.place(WATER)
        builder.move(FORWARD, 1)
    }
    builder.turn(TurnDirection.Left)
    for(let i = 0;i<width+1;i++) {
        builder.place(WATER)
        builder.move(FORWARD, 1)
    }
    builder.turn(TurnDirection.Left)
    for(let i = 0;i<length+1;i++) {
        builder.place(WATER)
        builder.move(FORWARD, 1)
    }
    builder.turn(TurnDirection.Left)
    builder.move(FORWARD, 1)
    builder.move(LEFT, 1)
}

function buildFoundation(width:number, length:number, height:number)  {
    builder.teleportToOrigin()
    buildWaterPit(width, length)
    builder.mark()
    builder.move(DOWN, 1)
    for(let i = 0; i < height; i++){
        builder.setOrigin()
        for(let j = 0; j < length; j++){
            builder.move(LEFT, j)
            builder.move(FORWARD, width-1)
            builder.teleportToOrigin()
        }
        builder.move(UP, 1)
    }
    builder.tracePath(COBBLESTONE)
    builder.place(AIR)
    builder.teleportToOrigin()
    builder.move(FORWARD, 1)
    builder.move(LEFT, 1)
    builder.move(UP, 1)
    builder.setOrigin()
}

function buildRoof(width:number, length:number) {
    builder.mark()
    builder.setOrigin()
    for(let j = 0; j < length; j++){
            builder.move(LEFT, j)
            builder.move(FORWARD, width-1)
            builder.teleportToOrigin()
    }
    builder.move(UP, 1)
    builder.tracePath(BRICKS)
    builder.place(AIR)
    for(let i = 0;i<width-1;i++) {
        if(i%2==0){
            builder.place(GOLD_BLOCK)
        }
        builder.move(FORWARD, 1)
    }
    builder.turn(TurnDirection.Left)
    for(let i = 0;i<length-1;i++) {
        if(i%2==0){
            builder.place(GOLD_BLOCK)
        }
        builder.move(FORWARD, 1)
    }
    builder.turn(TurnDirection.Left)
    for(let i = 0;i<width-1;i++) {
        if(i%2==0){
            builder.place(GOLD_BLOCK)
        }
        builder.move(FORWARD, 1)
    }
    builder.turn(TurnDirection.Left)
    for(let i = 0;i<length-1;i++) {
        if(i%2==0){
            builder.place(GOLD_BLOCK)
        }
        builder.move(FORWARD, 1)
    }
}

function makeMakeshiftWindows(width:number, lenght:number) {
    builder.move(DOWN, 8)
    builder.move(LEFT, 4)
    builder.mark()
    builder.move(LEFT, 4)
    builder.move(UP,1)
    builder.move(RIGHT, 4)
    builder.move(UP,1)
    builder.move(LEFT, 4)
    builder.move(UP,1)
    builder.move(RIGHT, 4)
    builder.tracePath(GLASS)
    builder.move(BACK, lenght-1)
    builder.move(DOWN, 3)
    builder.mark()
    builder.move(LEFT, 4)
    builder.move(UP,1)
    builder.move(RIGHT, 4)
    builder.move(UP,1)
    builder.move(LEFT, 4)
    builder.move(UP,1)
    builder.move(RIGHT, 4)
    builder.tracePath(GLASS)
    builder.move(RIGHT, 4)
    builder.move(FORWARD, 4)
    builder.mark()
    builder.move(FORWARD, 4)
    builder.move(UP,1)
    builder.move(BACK, 4)
    builder.move(UP,1)
    builder.move(FORWARD, 4)
    builder.move(UP,1)
    builder.move(BACK, 4)
    builder.tracePath(GLASS)
    builder.move(LEFT, width-1)
    builder.move(DOWN, 3)
    builder.mark()
    builder.move(FORWARD, 4)
    builder.move(UP,1)
    builder.move(BACK, 4)
    builder.move(UP,1)
    builder.move(FORWARD, 4)
    builder.move(UP,1)
    builder.move(BACK, 4)
    builder.tracePath(GLASS)
}

player.onChat("castle", function () {
    builder.setOrigin()
    buildFoundation(16, 16, 3)
	buildMainChunk(14, 14, 10)
    buildRoof(14, 14)
    makeMakeshiftWindows(14, 14)
})
