cc.Class({
    extends: cc.Component,

    properties: {
        _yuepu:[],
        shuruL:cc.Label,
        _isShuru:false,
        _paishu:1,
    },

    // LIFE-CYCLE CALLBACKS:

    // onLoad () {},

    start () {
        this._yuepu = [5,3,5,3,5,3,1,0,2,4,3,2,5,0,5,3,5,3,5,3,1,0,2,4,3,2,1,0,2,2,4,4,3,1,5,2,4,3,2,5,0,5,3,5,3,5,3,1,0,2,4,3,2,1];
        this.updateSRKL();
        cc.systemEvent.on(cc.SystemEvent.EventType.KEY_UP, this.onKeyReleased, this);
    },

    onKeyReleased: function(event) {
        if (event.keyCode == 6) {
            cc.director.end();
        }
    },

    click:function(event) {
        var self = this;
        if(event.target.name == "0" && !this._isShuru){
            for(var i=0;i<this._yuepu.length;i++){
                (function(i){
                    setTimeout(function() {
                        console.log(i);
                        if(self._yuepu[i] && self._yuepu[i]!="0"){
                            var audioUrl = cc.url.raw("resources/sounds/" + self._yuepu[i]+".mp3");
                            var audioId = cc.audioEngine.play(audioUrl,false);
                        }
                    }, 600 * i/self._paishu);
                })(i)
            }
        }else if(event.target.name == "9"){
            this._isShuru = true;
        }else if(event.target.name == "8"){
            this._isShuru = false;
        }else{
            if(this._isShuru){
                this._yuepu.push(event.target.name);
                this.updateSRKL();
            }else{
                var audioUrl = cc.url.raw("resources/sounds/" + event.target.name+".mp3");
                var audioId = cc.audioEngine.play(audioUrl,false);
            }
        }
    },

    updateSRKL:function(){
        this.shuruL.string = ""+this._yuepu;
    },

    clear:function(){
        this._yuepu = [];
        this.updateSRKL();
    },

    del:function(){
        this._yuepu.pop();
        this.updateSRKL();
    },

    paishu:function(){
        if(this._paishu < 1){
            this._paishu = 1;
        }else{
            this._paishu = 2;
        }
        
    },


    // update (dt) {},
});
