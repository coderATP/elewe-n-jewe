import { UIEventsHandler } from "../events/UIEventsHandler.js";

export class BaseScene extends Phaser.Scene{
    constructor(scene){
        super(scene);
        
        this.scene = scene;
        this.config = undefined;
        this.menuScreen = document.getElementById("menuScreen");
        this.tableSelectionScreen = document.getElementById("tableSelectionScreen");
        this.playScreen = document.getElementById("playScreen");
        this.ui = new UIEventsHandler(scene);
        
        this.pauseScreen = document.getElementById("pauseScreen");
        this.confirmScreen = document.getElementById("confirmScreen");
        this.playScreenTopUI = document.getElementById("playScreenTop");
        this.playScreenBottomUI = document.getElementById("playScreenBottom");
        this.levelCompleteScreen = document.getElementById("levelCompleteScreen");
 
        this.screens = [this.menuScreen, this.playScreenTopUI, this.playScreenBottomUI, this.playScreen, this.tableSelectionScreen, this.levelCompleteScreen, this.pauseScreen, this.confirmScreen]
    }
    
    hideOne(screen){
        screen.style.display = "none";
        screen.style.zIndex = -1;
    }
    showOne(screen, display, zIndex = -1){
        screen.style.display = display;
        screen.style.zIndex = zIndex;
    } 
    hideMultiple(screens){
        screens.forEach(screen=>{
            screen.style.zIndex = -1;
            screen.style.display = "none";
        })
        return screens;
    }
    
    showMultiple(screens, display, zIndex = -1){
        screens.forEach(screen=>{
            screen.style.zIndex = zIndex;
            screen.style.display = display;
        }) 
        return screens;
    }
    hideAllScreens(){
        this.screens.forEach(screen=>{
            screen.style.zIndex = -1; 
            screen.style.display = "none";
        });
        return this.screens;
    }
}