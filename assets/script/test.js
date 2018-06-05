var ShaderUtils = require("ShaderUtils");
cc.Class({
    extends: cc.Component,

    properties: {
        // foo: {
        //     // ATTRIBUTES:
        //     default: null,        // The default value will be used only when the component attaching
        //                           // to a node for the first time
        //     type: cc.SpriteFrame, // optional, default is typeof default
        //     serializable: true,   // optional, default is true
        // },
        // bar: {
        //     get () {
        //         return this._bar;
        //     },
        //     set (value) {
        //         this._bar = value;
        //     }
        // },
    },

    // LIFE-CYCLE CALLBACKS:

    // onLoad () {},

    start () {
        var sprite = this.node.getComponent(cc.Sprite);
        ShaderUtils.setShader(sprite, "gray");
        this.tuowei();
    },

    tuowei (){
        var x = 48 , y = 68;
        var array = [cc.p(-x,y),cc.p(0,y+1),cc.p(x,y),cc.p(x+1,0),cc.p(x,-y),cc.p(0,-y-1),cc.p(-x,-y),cc.p(-x-1,0),cc.p(-x,y)];
        var action = cc.catmullRomTo(4, array);
        this.node.parent.getChildByName("head").getChildByName("dian").runAction(cc.repeatForever(action));
    },

    /**
     * 通过链接获得图片
     * @param url 链接
     */
    getSpriteFrameByUrl:function(url,callback){
        if(cc.sys.isNative == false){
            return;
        }
        cc.loader.load(url,function (err,tex) {
            var spriteFrame = new cc.SpriteFrame(tex);
            // var renderTexture = cc.RenderTexture.create(tex.width, tex.height);
            // var sprite0 = this.node.getComponent(cc.Sprite);
            // sprite0.spriteFrame = spriteFrame;
            // // renderTexture.setSprite(sprite0);
            // renderTexture.visit(this.node.getRotation());

            var _storagePath = ((jsb.fileUtils ? jsb.fileUtils.getWritablePath() : '/') + 'blackjack-remote-asset');
            if( jsb.fileUtils.writeDataToFile(  ttt , _storagePath) ){
                cc.log('Remote write file succeed.');
            }else{
                cc.log('Remote write file failed.');
            }

            if(spriteFrame!=null){
                callback(spriteFrame,renderTexture);
            }
        }.bind(this));
    },

    function1(){
        var self = this;
        var txt = this.node.parent.getChildByName("txt").getComponent(cc.Label);

        var fileNames = [];
        var totalCount = 0;
        cc.loader.loadRes("test", function (err, data) {
            if(err){
                console.log(err);
            }else{
                fileNames = data;
                if(fileNames.length > 0){
                    totalCount = fileNames.length;
                    fn();
                }
            }
        });

        var fn = function(){
            if(fileNames.length <= 0){
                cc.game.restart();
                return;
            }
            var fullPath=self._storagePath = ((jsb.fileUtils ? jsb.fileUtils.getWritablePath() : '/') + 'blackjack-remote-asset/res/raw-assets/resources/picture/'+fileNames[0]);
            var downUrl = "http://192.168.6.104:8088/picture/"+fileNames[0];
            var downloader = new jsb.Downloader();
            downloader.createDownloadFileTask(downUrl,fullPath,"");
            downloader.setOnTaskError(function (sender,errorCode,errorCodeInternal,errorStr){//下载错误
                cc.log("errorStr:",errorStr);
                txt.string += "\n"+" "+"errorStr:"+errorStr;
            });
            downloader.setOnTaskProgress(function(sender,bytesReceived,totalbytesR,totalbytesE){
                // txt.string += "\n"+" "+bytesReceived+" / "+totalbytesR+" -/- "+totalbytesE;
            });
            downloader.setOnFileTaskSuccess(function (sender){//下载完成
                cc.log("down success!!!!");
                txt.string += "\n"+" "+"down success!!!!";
                
                fileNames.shift();
                txt.string += "\n"+" "+totalCount-fileNames.length+"/"+totalCount;
                fn();
            });
        };
    },
    


    changePicture (){
        // var txt = this.node.parent.getChildByName("txt").getComponent(cc.Label);
        // var fileName = "bg000.jpg";
        // var _storagePath = ((jsb.fileUtils ? jsb.fileUtils.getWritablePath() : '/') + 'blackjack-remote-asset');
        // txt.string += "\n"+" "+_storagePath;
        // var filePath = jsb.fileUtils.getWritablePath() + fileName;
        // var url = "http://117.78.33.108:8088/picture/guanggao1.jpg";
        // this.getSpriteFrameByUrl(url,function (spriteFrame,renderTexture) {
        //     this.node.getComponent(cc.Sprite).spriteFrame = spriteFrame;
        //     txt.string += "\n"+url;

        //     // spriteFrame.writeDataToFile(spriteFrame, _storagePath+"/res/raw-assets/resources/picture/"+fileName, function () {
        //     //     // jsb.fileUtils.copyFile(filePath,this._storagePath+"/res/raw-assets/resources/picture/"+fileName);
        //     //     txt.string += "\n"+" ++++ "+_storagePath+"/res/raw-assets/resources/picture/"+fileName;
        //     // });
        //     renderTexture.saveToFile(fileName, cc.ImageFormat.JPG, true, function () {
        //         txt.string += "\n"+" ++++ "+_storagePath+"/res/raw-assets/resources/picture/"+fileName;
        //     });
        // }.bind(this));
        // jsb.fileUtils.copyURLToFile(url,this._storagePath+"/res/raw-assets/resources/picture/"+fileName);

        this.function1();
    },

    // update (dt) {},
});
