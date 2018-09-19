// Garden Gnome Software - Skin
// Pano2VR 6.0 beta3/16902
// Filename: skin test3.ggsk
// Generated lun. sept. 17 11:57:32 2018

function pano2vrSkin(player,base) {
	player.addVariable('botcirc', 2);
	player.setVariableValue('botcirc', true);
	player.addVariable('tempor', 2);
	player.setVariableValue('tempor', false);
	player.addVariable('info', 2);
	player.setVariableValue('info', false);
	player.addVariable('caro', 2);
	player.setVariableValue('caro', false);
	player.addVariable('about', 2);
	player.setVariableValue('about', false);
	player.addVariable('products', 2);
	player.setVariableValue('products', false);
	var me=this;
	var flag=false;
	var hotspotTemplates=[];
	var skinKeyPressed = 0;
	this.player=player;
	this.player.skinObj=this;
	this.divSkin=player.divSkin;
	this.ggUserdata=me.player.userdata;
	this.lastSize={ w: -1,h: -1 };
	var basePath="";
	// auto detect base path
	if (base=='?') {
		var scripts = document.getElementsByTagName('script');
		for(var i=0;i<scripts.length;i++) {
			var src=scripts[i].src;
			if (src.indexOf('skin.js')>=0) {
				var p=src.lastIndexOf('/');
				if (p>=0) {
					basePath=src.substr(0,p+1);
				}
			}
		}
	} else
	if (base) {
		basePath=base;
	}
	this.elementMouseDown=[];
	this.elementMouseOver=[];
	var cssPrefix='';
	var domTransition='transition';
	var domTransform='transform';
	var prefixes='Webkit,Moz,O,ms,Ms'.split(',');
	var i;
	if (typeof document.body.style['transform'] == 'undefined') {
		for(var i=0;i<prefixes.length;i++) {
			if (typeof document.body.style[prefixes[i] + 'Transform'] !== 'undefined') {
				cssPrefix='-' + prefixes[i].toLowerCase() + '-';
				domTransition=prefixes[i] + 'Transition';
				domTransform=prefixes[i] + 'Transform';
			}
		}
	}
	
	this.player.setMargins(0,0,0,0);
	
	this.updateSize=function(startElement) {
		var stack=[];
		stack.push(startElement);
		while(stack.length>0) {
			var e=stack.pop();
			if (e.ggUpdatePosition) {
				e.ggUpdatePosition();
			}
			if (e.hasChildNodes()) {
				for(var i=0;i<e.childNodes.length;i++) {
					stack.push(e.childNodes[i]);
				}
			}
		}
	}
	
	var parameterToTransform=function(p) {
		var hs='translate(' + p.rx + 'px,' + p.ry + 'px) rotate(' + p.a + 'deg) scale(' + p.sx + ',' + p.sy + ')';
		return hs;
	}
	
	this.findElements=function(id,regex) {
		var r=[];
		var stack=[];
		var pat=new RegExp(id,'');
		stack.push(me.divSkin);
		while(stack.length>0) {
			var e=stack.pop();
			if (regex) {
				if (pat.test(e.ggId)) r.push(e);
			} else {
				if (e.ggId==id) r.push(e);
			}
			if (e.hasChildNodes()) {
				for(var i=0;i<e.childNodes.length;i++) {
					stack.push(e.childNodes[i]);
				}
			}
		}
		return r;
	}
	
	this.addSkin=function() {
		var hs='';
		this.ggCurrentTime=new Date().getTime();
		this._rectangle_3=document.createElement('div');
		this._rectangle_3.ggId="Rectangle 3";
		this._rectangle_3.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1 };
		this._rectangle_3.ggVisible=false;
		this._rectangle_3.className="ggskin ggskin_rectangle ";
		this._rectangle_3.ggType='rectangle';
		hs ='';
		hs+='background : #787878;';
		hs+='border : 1px solid #000000;';
		hs+='cursor : default;';
		hs+='height : 100%;';
		hs+='left : 0px;';
		hs+='position : absolute;';
		hs+='top : 4px;';
		hs+='visibility : hidden;';
		hs+='width : 100%;';
		hs+='pointer-events:auto;';
		this._rectangle_3.setAttribute('style',hs);
		this._rectangle_3.style[domTransform + 'Origin']='50% 50%';
		me._rectangle_3.ggIsActive=function() {
			return false;
		}
		me._rectangle_3.ggElementNodeId=function() {
			return me.player.getCurrentNode();
		}
		this._rectangle_3.ggUpdatePosition=function (useTransition) {
		}
		this.divSkin.appendChild(this._rectangle_3);
		this._fondo_1=document.createElement('div');
		this._fondo_1.ggId="fondo 1";
		this._fondo_1.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1 };
		this._fondo_1.ggVisible=true;
		this._fondo_1.className="ggskin ggskin_rectangle ";
		this._fondo_1.ggType='rectangle';
		hs ='';
		hs+='background : #000000;';
		hs+='border : 0px solid #000000;';
		hs+='cursor : default;';
		hs+='height : 20%;';
		hs+='left : 0%;';
		hs+='position : absolute;';
		hs+='top : 80%;';
		hs+='visibility : inherit;';
		hs+='width : 100%;';
		hs+='pointer-events:none;';
		hs+='background: linear-gradient(to bottom, rgba(0,0,0,0), rgba(0,0,0,.5));';
		this._fondo_1.setAttribute('style',hs);
		this._fondo_1.style[domTransform + 'Origin']='50% 50%';
		me._fondo_1.ggIsActive=function() {
			return false;
		}
		me._fondo_1.ggElementNodeId=function() {
			return me.player.getCurrentNode();
		}
		this._fondo_1.ggUpdatePosition=function (useTransition) {
		}
		this.divSkin.appendChild(this._fondo_1);
		this._timer_1=document.createElement('div');
		this._timer_1.ggTimestamp=0;
		this._timer_1.ggLastIsActive=false;
		this._timer_1.ggTimeout=500;
		this._timer_1.ggId="Timer 1";
		this._timer_1.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1 };
		this._timer_1.ggVisible=true;
		this._timer_1.className="ggskin ggskin_timer ";
		this._timer_1.ggType='timer';
		hs ='';
		hs+='height : 20px;';
		hs+='left : 135px;';
		hs+='position : absolute;';
		hs+='top : 255px;';
		hs+='visibility : inherit;';
		hs+='width : 100px;';
		hs+='pointer-events:none;';
		this._timer_1.setAttribute('style',hs);
		this._timer_1.style[domTransform + 'Origin']='50% 50%';
		me._timer_1.ggIsActive=function() {
			return (me._timer_1.ggTimestamp==0 ? false : (Math.floor((me.ggCurrentTime - me._timer_1.ggTimestamp) / me._timer_1.ggTimeout) % 2 == 0));
		}
		me._timer_1.ggElementNodeId=function() {
			return me.player.getCurrentNode();
		}
		me._timer_1.logicBlock_visible = function() {
			var newLogicStateVisible;
			if (
				(me._timer_1.ggIsActive() == false)
			)
			{
				newLogicStateVisible = 0;
			}
			else {
				newLogicStateVisible = -1;
			}
			if (me._timer_1.ggCurrentLogicStateVisible != newLogicStateVisible) {
				me._timer_1.ggCurrentLogicStateVisible = newLogicStateVisible;
				me._timer_1.style[domTransition]='';
				if (me._timer_1.ggCurrentLogicStateVisible == 0) {
					me._timer_1.style.visibility="hidden";
					me._timer_1.ggVisible=false;
				}
				else {
					me._timer_1.style.visibility=(Number(me._timer_1.style.opacity)>0||!me._timer_1.style.opacity)?'inherit':'hidden';
					me._timer_1.ggVisible=true;
				}
			}
		}
		this._timer_1.ggActivate=function () {
			me.player.setVariableValue('tempor', true);
		}
		this._timer_1.ggDeactivate=function () {
			me.player.setVariableValue('tempor', false);
		}
		me._timer_1.ggCurrentLogicStateVisible = -1;
		this._timer_1.ggUpdateConditionTimer=function () {
			me._timer_1.logicBlock_visible();
		}
		this._timer_1.ggUpdatePosition=function (useTransition) {
		}
		this.divSkin.appendChild(this._timer_1);
		this._rectangle_2=document.createElement('div');
		this._rectangle_2.ggId="Rectangle 2";
		this._rectangle_2.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1 };
		this._rectangle_2.ggVisible=true;
		this._rectangle_2.className="ggskin ggskin_rectangle ";
		this._rectangle_2.ggType='rectangle';
		hs ='';
		hs+='border : 0px solid #000000;';
		hs+='cursor : default;';
		hs+='height : 65%;';
		hs+='left : 0%;';
		hs+='position : absolute;';
		hs+='top : 0%;';
		hs+='visibility : inherit;';
		hs+='width : 100%;';
		hs+='pointer-events:none;';
		this._rectangle_2.setAttribute('style',hs);
		this._rectangle_2.style[domTransform + 'Origin']='50% 50%';
		me._rectangle_2.ggIsActive=function() {
			return false;
		}
		me._rectangle_2.ggElementNodeId=function() {
			return me.player.getCurrentNode();
		}
		this._rectangle_2.onmouseover=function (e) {
			me.elementMouseOver['rectangle_2']=true;
		}
		this._rectangle_2.onmouseout=function (e) {
			me.elementMouseOver['rectangle_2']=false;
		}
		this._rectangle_2.ontouchend=function (e) {
			me.elementMouseOver['rectangle_2']=false;
		}
		this._rectangle_2.ggUpdatePosition=function (useTransition) {
		}
		this.divSkin.appendChild(this._rectangle_2);
		this._products=document.createElement('div');
		this._products.ggId="products";
		this._products.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1 };
		this._products.ggVisible=true;
		this._products.className="ggskin ggskin_container ";
		this._products.ggType='container';
		hs ='';
		hs+='height : 100%;';
		hs+='left : 0px;';
		hs+='opacity : 0;';
		hs+='position : absolute;';
		hs+='top : 0px;';
		hs+='visibility : hidden;';
		hs+='width : 100%;';
		hs+='pointer-events:none;';
		this._products.setAttribute('style',hs);
		this._products.style[domTransform + 'Origin']='50% 50%';
		me._products.ggIsActive=function() {
			return false;
		}
		me._products.ggElementNodeId=function() {
			return me.player.getCurrentNode();
		}
		me._products.logicBlock_alpha = function() {
			var newLogicStateAlpha;
			if (
				(me.player.getVariableValue('products') == true)
			)
			{
				newLogicStateAlpha = 0;
			}
			else {
				newLogicStateAlpha = -1;
			}
			if (me._products.ggCurrentLogicStateAlpha != newLogicStateAlpha) {
				me._products.ggCurrentLogicStateAlpha = newLogicStateAlpha;
				me._products.style[domTransition]='opacity 1000ms ease 0ms, visibility 1000ms ease 0ms';
				if (me._products.ggCurrentLogicStateAlpha == 0) {
					me._products.style.visibility=me._products.ggVisible?'inherit':'hidden';
					me._products.style.opacity=1;
				}
				else {
					me._products.style.visibility="hidden";
					me._products.style.opacity=0;
				}
			}
		}
		this._products.ggUpdatePosition=function (useTransition) {
		}
		this._rectangle_61=document.createElement('div');
		this._rectangle_61.ggId="Rectangle 6";
		this._rectangle_61.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1 };
		this._rectangle_61.ggVisible=true;
		this._rectangle_61.className="ggskin ggskin_rectangle ";
		this._rectangle_61.ggType='rectangle';
		hs ='';
		hs+='background : rgba(0,0,0,0.705882);';
		hs+='border : 0px solid #000000;';
		hs+='cursor : default;';
		hs+='height : 100%;';
		hs+='left : 0px;';
		hs+='position : absolute;';
		hs+='top : 0px;';
		hs+='visibility : inherit;';
		hs+='width : 100%;';
		hs+='pointer-events:auto;';
		this._rectangle_61.setAttribute('style',hs);
		this._rectangle_61.style[domTransform + 'Origin']='50% 50%';
		me._rectangle_61.ggIsActive=function() {
			if ((this.parentNode) && (this.parentNode.ggIsActive)) {
				return this.parentNode.ggIsActive();
			}
			return false;
		}
		me._rectangle_61.ggElementNodeId=function() {
			if ((this.parentNode) && (this.parentNode.ggElementNodeId)) {
				return this.parentNode.ggElementNodeId();
			}
			return me.player.getCurrentNode();
		}
		this._rectangle_61.onclick=function (e) {
			me.player.setVariableValue('products', false);
		}
		this._rectangle_61.ggUpdatePosition=function (useTransition) {
		}
		this._products.appendChild(this._rectangle_61);
		this._rectangle_71=document.createElement('div');
		this._rectangle_71.ggId="Rectangle 7";
		this._rectangle_71.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1 };
		this._rectangle_71.ggVisible=true;
		this._rectangle_71.className="ggskin ggskin_rectangle ";
		this._rectangle_71.ggType='rectangle';
		hs ='';
		hs+=cssPrefix + 'border-radius : 4px;';
		hs+='border-radius : 4px;';
		hs+='background : rgba(255,255,255,0.882353);';
		hs+='border : 0px solid #000000;';
		hs+='cursor : default;';
		hs+='height : 79.7601%;';
		hs+='left : 4.8%;';
		hs+='position : absolute;';
		hs+='top : 7.95%;';
		hs+='visibility : inherit;';
		hs+='width : 89.8667%;';
		hs+='pointer-events:auto;';
		this._rectangle_71.setAttribute('style',hs);
		this._rectangle_71.style[domTransform + 'Origin']='50% 50%';
		me._rectangle_71.ggIsActive=function() {
			if ((this.parentNode) && (this.parentNode.ggIsActive)) {
				return this.parentNode.ggIsActive();
			}
			return false;
		}
		me._rectangle_71.ggElementNodeId=function() {
			if ((this.parentNode) && (this.parentNode.ggElementNodeId)) {
				return this.parentNode.ggElementNodeId();
			}
			return me.player.getCurrentNode();
		}
		me._rectangle_71.logicBlock_position = function() {
			var newLogicStatePosition;
			if (
				(me.player.getViewerSize().width > 1150) && 
				(me.player.getViewerSize().width < 2000)
			)
			{
				newLogicStatePosition = 0;
			}
			else if (
				(me.player.getViewerSize().width > 2000)
			)
			{
				newLogicStatePosition = 1;
			}
			else {
				newLogicStatePosition = -1;
			}
			if (me._rectangle_71.ggCurrentLogicStatePosition != newLogicStatePosition) {
				me._rectangle_71.ggCurrentLogicStatePosition = newLogicStatePosition;
				me._rectangle_71.style[domTransition]='left 0s, top 0s, width 0s, height 0s';
				if (me._rectangle_71.ggCurrentLogicStatePosition == 0) {
					me._rectangle_71.style.left='35%';
					me._rectangle_71.style.top='15%';
				}
				else if (me._rectangle_71.ggCurrentLogicStatePosition == 1) {
					me._rectangle_71.style.left='41%';
					me._rectangle_71.style.top='20%';
				}
				else {
					me._rectangle_71.style.left='4.8%';
					me._rectangle_71.style.top='7.95%';
				}
			}
		}
		me._rectangle_71.logicBlock_size = function() {
			var newLogicStateSize;
			if (
				(me.player.getViewerSize().width > 1150) && 
				(me.player.getViewerSize().width < 2000)
			)
			{
				newLogicStateSize = 0;
			}
			else if (
				(me.player.getViewerSize().width > 2000)
			)
			{
				newLogicStateSize = 1;
			}
			else {
				newLogicStateSize = -1;
			}
			if (me._rectangle_71.ggCurrentLogicStateSize != newLogicStateSize) {
				me._rectangle_71.ggCurrentLogicStateSize = newLogicStateSize;
				me._rectangle_71.style[domTransition]='left 0s, top 0s, width 0s, height 0s';
				if (me._rectangle_71.ggCurrentLogicStateSize == 0) {
					me._rectangle_71.style.width='30%';
					me._rectangle_71.style.height='60%';
					me.updateSize(me._rectangle_71);
				}
				else if (me._rectangle_71.ggCurrentLogicStateSize == 1) {
					me._rectangle_71.style.width='18%';
					me._rectangle_71.style.height='40%';
					me.updateSize(me._rectangle_71);
				}
				else {
					me._rectangle_71.style.width='89.8667%';
					me._rectangle_71.style.height='79.7601%';
					me.updateSize(me._rectangle_71);
				}
			}
		}
		this._rectangle_71.ggUpdatePosition=function (useTransition) {
		}
		this._text_310=document.createElement('div');
		this._text_310__text=document.createElement('div');
		this._text_310.className='ggskin ggskin_textdiv';
		this._text_310.ggTextDiv=this._text_310__text;
		this._text_310.ggId="Text 3";
		this._text_310.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1 };
		this._text_310.ggVisible=true;
		this._text_310.className="ggskin ggskin_text ";
		this._text_310.ggType='text';
		hs ='';
		hs+='height : 52.2556%;';
		hs+='left : 6.53%;';
		hs+='position : absolute;';
		hs+='top : 80px;';
		hs+='visibility : inherit;';
		hs+='width : 87.2403%;';
		hs+='pointer-events:auto;';
		hs+='font-size: 16px;';
		this._text_310.setAttribute('style',hs);
		this._text_310.style[domTransform + 'Origin']='50% 50%';
		hs ='position:absolute;';
		hs+='cursor: default;';
		hs+='left: 0px;';
		hs+='top:  0px;';
		hs+='width: 100%;';
		hs+='height: 100%;';
		hs+='border: 0px solid #000000;';
		hs+='color: #000000;';
		hs+='text-align: center;';
		hs+='white-space: pre-wrap;';
		hs+='padding: 0px 1px 0px 1px;';
		hs+='overflow: hidden;';
		hs+='overflow-y: auto;';
		this._text_310__text.setAttribute('style',hs);
		this._text_310__text.innerHTML="Our company designs green walls that can be scaled for any size project that rethink the way people engage with nature.";
		this._text_310.appendChild(this._text_310__text);
		me._text_310.ggIsActive=function() {
			if ((this.parentNode) && (this.parentNode.ggIsActive)) {
				return this.parentNode.ggIsActive();
			}
			return false;
		}
		me._text_310.ggElementNodeId=function() {
			if ((this.parentNode) && (this.parentNode.ggElementNodeId)) {
				return this.parentNode.ggElementNodeId();
			}
			return me.player.getCurrentNode();
		}
		this._text_310.ggUpdatePosition=function (useTransition) {
		}
		this._rectangle_71.appendChild(this._text_310);
		this._text_39=document.createElement('div');
		this._text_39__text=document.createElement('div');
		this._text_39.className='ggskin ggskin_textdiv';
		this._text_39.ggTextDiv=this._text_39__text;
		this._text_39.ggId="Text 3";
		this._text_39.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1 };
		this._text_39.ggVisible=true;
		this._text_39.className="ggskin ggskin_text ";
		this._text_39.ggType='text';
		hs ='';
		hs+='height : 16.9173%;';
		hs+='left : 2.37%;';
		hs+='position : absolute;';
		hs+='top : 5.08%;';
		hs+='visibility : inherit;';
		hs+='width : 93.7685%;';
		hs+='pointer-events:auto;';
		hs+='font-size: 24px;';
		this._text_39.setAttribute('style',hs);
		this._text_39.style[domTransform + 'Origin']='50% 50%';
		hs ='position:absolute;';
		hs+='cursor: default;';
		hs+='left: 0px;';
		hs+='top:  0px;';
		hs+='width: 100%;';
		hs+='height: 100%;';
		hs+='border: 0px solid #000000;';
		hs+='color: rgba(141,180,52,1);';
		hs+='text-align: center;';
		hs+='white-space: pre-wrap;';
		hs+='padding: 0px 1px 0px 1px;';
		hs+='overflow: hidden;';
		this._text_39__text.setAttribute('style',hs);
		this._text_39__text.innerHTML="OUR PRODUCTS";
		this._text_39.appendChild(this._text_39__text);
		me._text_39.ggIsActive=function() {
			if ((this.parentNode) && (this.parentNode.ggIsActive)) {
				return this.parentNode.ggIsActive();
			}
			return false;
		}
		me._text_39.ggElementNodeId=function() {
			if ((this.parentNode) && (this.parentNode.ggElementNodeId)) {
				return this.parentNode.ggElementNodeId();
			}
			return me.player.getCurrentNode();
		}
		this._text_39.ggUpdatePosition=function (useTransition) {
		}
		this._rectangle_71.appendChild(this._text_39);
		this._rectangle_84=document.createElement('div');
		this._rectangle_84.ggId="Rectangle 8";
		this._rectangle_84.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1 };
		this._rectangle_84.ggVisible=true;
		this._rectangle_84.className="ggskin ggskin_rectangle ";
		this._rectangle_84.ggType='rectangle';
		hs ='';
		hs+='background : #8db434;';
		hs+='border : 0px solid #000000;';
		hs+='cursor : pointer;';
		hs+='height : 9.77444%;';
		hs+='left : 6.23145%;';
		hs+='position : absolute;';
		hs+='top : 86.47%;';
		hs+='visibility : inherit;';
		hs+='width : 87.2403%;';
		hs+='pointer-events:auto;';
		this._rectangle_84.setAttribute('style',hs);
		this._rectangle_84.style[domTransform + 'Origin']='50% 50%';
		me._rectangle_84.ggIsActive=function() {
			if ((this.parentNode) && (this.parentNode.ggIsActive)) {
				return this.parentNode.ggIsActive();
			}
			return false;
		}
		me._rectangle_84.ggElementNodeId=function() {
			if ((this.parentNode) && (this.parentNode.ggElementNodeId)) {
				return this.parentNode.ggElementNodeId();
			}
			return me.player.getCurrentNode();
		}
		this._rectangle_84.onclick=function (e) {
			me.player.openUrl("http:\/\/cspace.online\/muses\/symbiotikwalls\/new7\/en\/contact.php","_self");
		}
		this._rectangle_84.ggUpdatePosition=function (useTransition) {
		}
		this._text_38=document.createElement('div');
		this._text_38__text=document.createElement('div');
		this._text_38.className='ggskin ggskin_textdiv';
		this._text_38.ggTextDiv=this._text_38__text;
		this._text_38.ggId="Text 3";
		this._text_38.ggDx=-1;
		this._text_38.ggDy=10.5;
		this._text_38.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1 };
		this._text_38.ggVisible=true;
		this._text_38.className="ggskin ggskin_text ";
		this._text_38.ggType='text';
		hs ='';
		hs+='cursor : pointer;';
		hs+='height : 41px;';
		hs+='left : -10000px;';
		hs+='position : absolute;';
		hs+='top : -10000px;';
		hs+='visibility : inherit;';
		hs+='width : 316px;';
		hs+='pointer-events:auto;';
		hs+='font-size: 18px;';
		this._text_38.setAttribute('style',hs);
		this._text_38.style[domTransform + 'Origin']='50% 50%';
		hs ='position:absolute;';
		hs+='left: 0px;';
		hs+='top:  0px;';
		hs+='width: 316px;';
		hs+='height: 41px;';
		hs+='border: 0px solid #000000;';
		hs+='color: rgba(255,255,255,1);';
		hs+='text-align: center;';
		hs+='white-space: pre-wrap;';
		hs+='padding: 0px 1px 0px 1px;';
		hs+='overflow: hidden;';
		this._text_38__text.setAttribute('style',hs);
		this._text_38__text.innerHTML="CONTACT US";
		this._text_38.appendChild(this._text_38__text);
		me._text_38.ggIsActive=function() {
			if ((this.parentNode) && (this.parentNode.ggIsActive)) {
				return this.parentNode.ggIsActive();
			}
			return false;
		}
		me._text_38.ggElementNodeId=function() {
			if ((this.parentNode) && (this.parentNode.ggElementNodeId)) {
				return this.parentNode.ggElementNodeId();
			}
			return me.player.getCurrentNode();
		}
		this._text_38.ggUpdatePosition=function (useTransition) {
			if (useTransition==='undefined') {
				useTransition = false;
			}
			if (!useTransition) {
				this.style[domTransition]='none';
			}
			if (this.parentNode) {
				var pw=this.parentNode.clientWidth;
				var w=this.offsetWidth;
					this.style.left=(this.ggDx + pw/2 - w/2) + 'px';
				var ph=this.parentNode.clientHeight;
				var h=this.offsetHeight;
					this.style.top=(this.ggDy + ph/2 - h/2) + 'px';
			}
		}
		this._rectangle_84.appendChild(this._text_38);
		this._rectangle_71.appendChild(this._rectangle_84);
		this._rectangle_83=document.createElement('div');
		this._rectangle_83.ggId="Rectangle 8";
		this._rectangle_83.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1 };
		this._rectangle_83.ggVisible=true;
		this._rectangle_83.className="ggskin ggskin_rectangle ";
		this._rectangle_83.ggType='rectangle';
		hs ='';
		hs+='background : rgba(161,161,163,0.00392157);';
		hs+='border : 2px solid #393939;';
		hs+='cursor : pointer;';
		hs+='height : 9.77444%;';
		hs+='left : 6.23326%;';
		hs+='position : absolute;';
		hs+='top : 73.1203%;';
		hs+='visibility : inherit;';
		hs+='width : 87.2403%;';
		hs+='pointer-events:auto;';
		this._rectangle_83.setAttribute('style',hs);
		this._rectangle_83.style[domTransform + 'Origin']='50% 50%';
		me._rectangle_83.ggIsActive=function() {
			if ((this.parentNode) && (this.parentNode.ggIsActive)) {
				return this.parentNode.ggIsActive();
			}
			return false;
		}
		me._rectangle_83.ggElementNodeId=function() {
			if ((this.parentNode) && (this.parentNode.ggElementNodeId)) {
				return this.parentNode.ggElementNodeId();
			}
			return me.player.getCurrentNode();
		}
		this._rectangle_83.onclick=function (e) {
			me.player.setVariableValue('products', false);
		}
		this._rectangle_83.ggUpdatePosition=function (useTransition) {
		}
		this._text_37=document.createElement('div');
		this._text_37__text=document.createElement('div');
		this._text_37.className='ggskin ggskin_textdiv';
		this._text_37.ggTextDiv=this._text_37__text;
		this._text_37.ggId="Text 3";
		this._text_37.ggDx=-1;
		this._text_37.ggDy=10.5;
		this._text_37.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1 };
		this._text_37.ggVisible=true;
		this._text_37.className="ggskin ggskin_text ";
		this._text_37.ggType='text';
		hs ='';
		hs+='cursor : pointer;';
		hs+='height : 41px;';
		hs+='left : -10000px;';
		hs+='position : absolute;';
		hs+='top : -10000px;';
		hs+='visibility : inherit;';
		hs+='width : 316px;';
		hs+='pointer-events:auto;';
		hs+='font-size: 18px;';
		this._text_37.setAttribute('style',hs);
		this._text_37.style[domTransform + 'Origin']='50% 50%';
		hs ='position:absolute;';
		hs+='left: 0px;';
		hs+='top:  0px;';
		hs+='width: 316px;';
		hs+='height: 41px;';
		hs+='border: 0px solid #000000;';
		hs+='color: rgba(50,50,50,1);';
		hs+='text-align: center;';
		hs+='white-space: pre-wrap;';
		hs+='padding: 0px 1px 0px 1px;';
		hs+='overflow: hidden;';
		this._text_37__text.setAttribute('style',hs);
		this._text_37__text.innerHTML="EXPLORE";
		this._text_37.appendChild(this._text_37__text);
		me._text_37.ggIsActive=function() {
			if ((this.parentNode) && (this.parentNode.ggIsActive)) {
				return this.parentNode.ggIsActive();
			}
			return false;
		}
		me._text_37.ggElementNodeId=function() {
			if ((this.parentNode) && (this.parentNode.ggElementNodeId)) {
				return this.parentNode.ggElementNodeId();
			}
			return me.player.getCurrentNode();
		}
		this._text_37.onclick=function (e) {
			me.player.setVariableValue('products', false);
		}
		this._text_37.ggUpdatePosition=function (useTransition) {
			if (useTransition==='undefined') {
				useTransition = false;
			}
			if (!useTransition) {
				this.style[domTransition]='none';
			}
			if (this.parentNode) {
				var pw=this.parentNode.clientWidth;
				var w=this.offsetWidth;
					this.style.left=(this.ggDx + pw/2 - w/2) + 'px';
				var ph=this.parentNode.clientHeight;
				var h=this.offsetHeight;
					this.style.top=(this.ggDy + ph/2 - h/2) + 'px';
			}
		}
		this._rectangle_83.appendChild(this._text_37);
		this._rectangle_71.appendChild(this._rectangle_83);
		this._svg_13=document.createElement('div');
		this._svg_13__img=document.createElement('img');
		this._svg_13__img.className='ggskin ggskin_svg';
		this._svg_13__img.setAttribute('src',basePath + 'images/svg_13.svg');
		this._svg_13__img.setAttribute('style','position: absolute;top: 0px;left: 0px;width: 100%;height: 100%;-webkit-user-drag:none;pointer-events:none;;');
		this._svg_13__img['ondragstart']=function() { return false; };
		this._svg_13.appendChild(this._svg_13__img);
		this._svg_13.ggId="Svg 1";
		this._svg_13.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1 };
		this._svg_13.ggVisible=true;
		this._svg_13.className="ggskin ggskin_svg ";
		this._svg_13.ggType='svg';
		hs ='';
		hs+='cursor : pointer;';
		hs+='height : 30px;';
		hs+='position : absolute;';
		hs+='right : 4px;';
		hs+='top : 4px;';
		hs+='visibility : inherit;';
		hs+='width : 30px;';
		hs+='pointer-events:auto;';
		this._svg_13.setAttribute('style',hs);
		this._svg_13.style[domTransform + 'Origin']='50% 50%';
		me._svg_13.ggIsActive=function() {
			if ((this.parentNode) && (this.parentNode.ggIsActive)) {
				return this.parentNode.ggIsActive();
			}
			return false;
		}
		me._svg_13.ggElementNodeId=function() {
			if ((this.parentNode) && (this.parentNode.ggElementNodeId)) {
				return this.parentNode.ggElementNodeId();
			}
			return me.player.getCurrentNode();
		}
		this._svg_13.onclick=function (e) {
			me.player.setVariableValue('products', false);
		}
		this._svg_13.ggUpdatePosition=function (useTransition) {
			if (useTransition==='undefined') {
				useTransition = false;
			}
			if (!useTransition) {
				this.style[domTransition]='none';
			}
			if (this.parentNode) {
			}
		}
		this._rectangle_71.appendChild(this._svg_13);
		this._products.appendChild(this._rectangle_71);
		this.divSkin.appendChild(this._products);
		this._about=document.createElement('div');
		this._about.ggId="about";
		this._about.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1 };
		this._about.ggVisible=true;
		this._about.className="ggskin ggskin_container ";
		this._about.ggType='container';
		hs ='';
		hs+='height : 100%;';
		hs+='left : 0px;';
		hs+='opacity : 0;';
		hs+='position : absolute;';
		hs+='top : 0px;';
		hs+='visibility : hidden;';
		hs+='width : 100%;';
		hs+='pointer-events:none;';
		this._about.setAttribute('style',hs);
		this._about.style[domTransform + 'Origin']='50% 50%';
		me._about.ggIsActive=function() {
			return false;
		}
		me._about.ggElementNodeId=function() {
			return me.player.getCurrentNode();
		}
		me._about.logicBlock_alpha = function() {
			var newLogicStateAlpha;
			if (
				(me.player.getVariableValue('about') == true)
			)
			{
				newLogicStateAlpha = 0;
			}
			else {
				newLogicStateAlpha = -1;
			}
			if (me._about.ggCurrentLogicStateAlpha != newLogicStateAlpha) {
				me._about.ggCurrentLogicStateAlpha = newLogicStateAlpha;
				me._about.style[domTransition]='opacity 1000ms ease 0ms, visibility 1000ms ease 0ms';
				if (me._about.ggCurrentLogicStateAlpha == 0) {
					me._about.style.visibility=me._about.ggVisible?'inherit':'hidden';
					me._about.style.opacity=1;
				}
				else {
					me._about.style.visibility="hidden";
					me._about.style.opacity=0;
				}
			}
		}
		this._about.ggUpdatePosition=function (useTransition) {
		}
		this._rectangle_60=document.createElement('div');
		this._rectangle_60.ggId="Rectangle 6";
		this._rectangle_60.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1 };
		this._rectangle_60.ggVisible=true;
		this._rectangle_60.className="ggskin ggskin_rectangle ";
		this._rectangle_60.ggType='rectangle';
		hs ='';
		hs+='background : rgba(0,0,0,0.705882);';
		hs+='border : 0px solid #000000;';
		hs+='cursor : default;';
		hs+='height : 100%;';
		hs+='left : 0px;';
		hs+='position : absolute;';
		hs+='top : 0px;';
		hs+='visibility : inherit;';
		hs+='width : 100%;';
		hs+='pointer-events:auto;';
		this._rectangle_60.setAttribute('style',hs);
		this._rectangle_60.style[domTransform + 'Origin']='50% 50%';
		me._rectangle_60.ggIsActive=function() {
			if ((this.parentNode) && (this.parentNode.ggIsActive)) {
				return this.parentNode.ggIsActive();
			}
			return false;
		}
		me._rectangle_60.ggElementNodeId=function() {
			if ((this.parentNode) && (this.parentNode.ggElementNodeId)) {
				return this.parentNode.ggElementNodeId();
			}
			return me.player.getCurrentNode();
		}
		this._rectangle_60.onclick=function (e) {
			me.player.setVariableValue('about', false);
		}
		this._rectangle_60.ggUpdatePosition=function (useTransition) {
		}
		this._about.appendChild(this._rectangle_60);
		this._rectangle_70=document.createElement('div');
		this._rectangle_70.ggId="Rectangle 7";
		this._rectangle_70.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1 };
		this._rectangle_70.ggVisible=true;
		this._rectangle_70.className="ggskin ggskin_rectangle ";
		this._rectangle_70.ggType='rectangle';
		hs ='';
		hs+=cssPrefix + 'border-radius : 4px;';
		hs+='border-radius : 4px;';
		hs+='background : rgba(255,255,255,0.882353);';
		hs+='border : 0px solid #000000;';
		hs+='cursor : default;';
		hs+='height : 79.7601%;';
		hs+='left : 4.8%;';
		hs+='position : absolute;';
		hs+='top : 7.95%;';
		hs+='visibility : inherit;';
		hs+='width : 89.8667%;';
		hs+='pointer-events:auto;';
		this._rectangle_70.setAttribute('style',hs);
		this._rectangle_70.style[domTransform + 'Origin']='50% 50%';
		me._rectangle_70.ggIsActive=function() {
			if ((this.parentNode) && (this.parentNode.ggIsActive)) {
				return this.parentNode.ggIsActive();
			}
			return false;
		}
		me._rectangle_70.ggElementNodeId=function() {
			if ((this.parentNode) && (this.parentNode.ggElementNodeId)) {
				return this.parentNode.ggElementNodeId();
			}
			return me.player.getCurrentNode();
		}
		me._rectangle_70.logicBlock_position = function() {
			var newLogicStatePosition;
			if (
				(me.player.getViewerSize().width > 1150) && 
				(me.player.getViewerSize().width < 2000)
			)
			{
				newLogicStatePosition = 0;
			}
			else if (
				(me.player.getViewerSize().width > 2000)
			)
			{
				newLogicStatePosition = 1;
			}
			else {
				newLogicStatePosition = -1;
			}
			if (me._rectangle_70.ggCurrentLogicStatePosition != newLogicStatePosition) {
				me._rectangle_70.ggCurrentLogicStatePosition = newLogicStatePosition;
				me._rectangle_70.style[domTransition]='left 0s, top 0s, width 0s, height 0s';
				if (me._rectangle_70.ggCurrentLogicStatePosition == 0) {
					me._rectangle_70.style.left='35%';
					me._rectangle_70.style.top='15%';
				}
				else if (me._rectangle_70.ggCurrentLogicStatePosition == 1) {
					me._rectangle_70.style.left='41%';
					me._rectangle_70.style.top='20%';
				}
				else {
					me._rectangle_70.style.left='4.8%';
					me._rectangle_70.style.top='7.95%';
				}
			}
		}
		me._rectangle_70.logicBlock_size = function() {
			var newLogicStateSize;
			if (
				(me.player.getViewerSize().width > 1150) && 
				(me.player.getViewerSize().width < 2000)
			)
			{
				newLogicStateSize = 0;
			}
			else if (
				(me.player.getViewerSize().width > 2000)
			)
			{
				newLogicStateSize = 1;
			}
			else {
				newLogicStateSize = -1;
			}
			if (me._rectangle_70.ggCurrentLogicStateSize != newLogicStateSize) {
				me._rectangle_70.ggCurrentLogicStateSize = newLogicStateSize;
				me._rectangle_70.style[domTransition]='left 0s, top 0s, width 0s, height 0s';
				if (me._rectangle_70.ggCurrentLogicStateSize == 0) {
					me._rectangle_70.style.width='30%';
					me._rectangle_70.style.height='60%';
					me.updateSize(me._rectangle_70);
				}
				else if (me._rectangle_70.ggCurrentLogicStateSize == 1) {
					me._rectangle_70.style.width='18%';
					me._rectangle_70.style.height='40%';
					me.updateSize(me._rectangle_70);
				}
				else {
					me._rectangle_70.style.width='89.8667%';
					me._rectangle_70.style.height='79.7601%';
					me.updateSize(me._rectangle_70);
				}
			}
		}
		this._rectangle_70.ggUpdatePosition=function (useTransition) {
		}
		this._text_36=document.createElement('div');
		this._text_36__text=document.createElement('div');
		this._text_36.className='ggskin ggskin_textdiv';
		this._text_36.ggTextDiv=this._text_36__text;
		this._text_36.ggId="Text 3";
		this._text_36.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1 };
		this._text_36.ggVisible=true;
		this._text_36.className="ggskin ggskin_text ";
		this._text_36.ggType='text';
		hs ='';
		hs+='height : 52.2556%;';
		hs+='left : 6.53%;';
		hs+='position : absolute;';
		hs+='top : 80px;';
		hs+='visibility : inherit;';
		hs+='width : 87.2403%;';
		hs+='pointer-events:auto;';
		hs+='font-size: 16px;';
		this._text_36.setAttribute('style',hs);
		this._text_36.style[domTransform + 'Origin']='50% 50%';
		hs ='position:absolute;';
		hs+='cursor: default;';
		hs+='left: 0px;';
		hs+='top:  0px;';
		hs+='width: 100%;';
		hs+='height: 100%;';
		hs+='border: 0px solid #000000;';
		hs+='color: #000000;';
		hs+='text-align: center;';
		hs+='white-space: pre-wrap;';
		hs+='padding: 0px 1px 0px 1px;';
		hs+='overflow: hidden;';
		hs+='overflow-y: auto;';
		this._text_36__text.setAttribute('style',hs);
		this._text_36__text.innerHTML="Build a better<b> quality of life<\/b> through living design.<br\/><br\/>Our company designs, manufactures, installs and maintains green walls that can be scaled for any size project, as well as interior design products that rethink the way people <b>engage with nature.<\/b>";
		this._text_36.appendChild(this._text_36__text);
		me._text_36.ggIsActive=function() {
			if ((this.parentNode) && (this.parentNode.ggIsActive)) {
				return this.parentNode.ggIsActive();
			}
			return false;
		}
		me._text_36.ggElementNodeId=function() {
			if ((this.parentNode) && (this.parentNode.ggElementNodeId)) {
				return this.parentNode.ggElementNodeId();
			}
			return me.player.getCurrentNode();
		}
		this._text_36.ggUpdatePosition=function (useTransition) {
		}
		this._rectangle_70.appendChild(this._text_36);
		this._text_35=document.createElement('div');
		this._text_35__text=document.createElement('div');
		this._text_35.className='ggskin ggskin_textdiv';
		this._text_35.ggTextDiv=this._text_35__text;
		this._text_35.ggId="Text 3";
		this._text_35.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1 };
		this._text_35.ggVisible=true;
		this._text_35.className="ggskin ggskin_text ";
		this._text_35.ggType='text';
		hs ='';
		hs+='height : 16.9173%;';
		hs+='left : 2.37%;';
		hs+='position : absolute;';
		hs+='top : 5.08%;';
		hs+='visibility : inherit;';
		hs+='width : 93.7685%;';
		hs+='pointer-events:auto;';
		hs+='font-size: 24px;';
		this._text_35.setAttribute('style',hs);
		this._text_35.style[domTransform + 'Origin']='50% 50%';
		hs ='position:absolute;';
		hs+='cursor: default;';
		hs+='left: 0px;';
		hs+='top:  0px;';
		hs+='width: 100%;';
		hs+='height: 100%;';
		hs+='border: 0px solid #000000;';
		hs+='color: rgba(141,180,52,1);';
		hs+='text-align: center;';
		hs+='white-space: pre-wrap;';
		hs+='padding: 0px 1px 0px 1px;';
		hs+='overflow: hidden;';
		this._text_35__text.setAttribute('style',hs);
		this._text_35__text.innerHTML="ABOUT SYMBIOTIK WALLS";
		this._text_35.appendChild(this._text_35__text);
		me._text_35.ggIsActive=function() {
			if ((this.parentNode) && (this.parentNode.ggIsActive)) {
				return this.parentNode.ggIsActive();
			}
			return false;
		}
		me._text_35.ggElementNodeId=function() {
			if ((this.parentNode) && (this.parentNode.ggElementNodeId)) {
				return this.parentNode.ggElementNodeId();
			}
			return me.player.getCurrentNode();
		}
		this._text_35.ggUpdatePosition=function (useTransition) {
		}
		this._rectangle_70.appendChild(this._text_35);
		this._rectangle_82=document.createElement('div');
		this._rectangle_82.ggId="Rectangle 8";
		this._rectangle_82.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1 };
		this._rectangle_82.ggVisible=true;
		this._rectangle_82.className="ggskin ggskin_rectangle ";
		this._rectangle_82.ggType='rectangle';
		hs ='';
		hs+='background : #8db434;';
		hs+='border : 0px solid #000000;';
		hs+='cursor : pointer;';
		hs+='height : 9.77444%;';
		hs+='left : 6.23145%;';
		hs+='position : absolute;';
		hs+='top : 86.47%;';
		hs+='visibility : inherit;';
		hs+='width : 87.2403%;';
		hs+='pointer-events:auto;';
		this._rectangle_82.setAttribute('style',hs);
		this._rectangle_82.style[domTransform + 'Origin']='50% 50%';
		me._rectangle_82.ggIsActive=function() {
			if ((this.parentNode) && (this.parentNode.ggIsActive)) {
				return this.parentNode.ggIsActive();
			}
			return false;
		}
		me._rectangle_82.ggElementNodeId=function() {
			if ((this.parentNode) && (this.parentNode.ggElementNodeId)) {
				return this.parentNode.ggElementNodeId();
			}
			return me.player.getCurrentNode();
		}
		this._rectangle_82.onclick=function (e) {
			me.player.openUrl("http:\/\/cspace.online\/muses\/symbiotikwalls\/new7\/en\/contact.php","_self");
		}
		this._rectangle_82.ggUpdatePosition=function (useTransition) {
		}
		this._text_34=document.createElement('div');
		this._text_34__text=document.createElement('div');
		this._text_34.className='ggskin ggskin_textdiv';
		this._text_34.ggTextDiv=this._text_34__text;
		this._text_34.ggId="Text 3";
		this._text_34.ggDx=-1;
		this._text_34.ggDy=10.5;
		this._text_34.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1 };
		this._text_34.ggVisible=true;
		this._text_34.className="ggskin ggskin_text ";
		this._text_34.ggType='text';
		hs ='';
		hs+='cursor : pointer;';
		hs+='height : 41px;';
		hs+='left : -10000px;';
		hs+='position : absolute;';
		hs+='top : -10000px;';
		hs+='visibility : inherit;';
		hs+='width : 316px;';
		hs+='pointer-events:auto;';
		hs+='font-size: 18px;';
		this._text_34.setAttribute('style',hs);
		this._text_34.style[domTransform + 'Origin']='50% 50%';
		hs ='position:absolute;';
		hs+='left: 0px;';
		hs+='top:  0px;';
		hs+='width: 316px;';
		hs+='height: 41px;';
		hs+='border: 0px solid #000000;';
		hs+='color: rgba(255,255,255,1);';
		hs+='text-align: center;';
		hs+='white-space: pre-wrap;';
		hs+='padding: 0px 1px 0px 1px;';
		hs+='overflow: hidden;';
		this._text_34__text.setAttribute('style',hs);
		this._text_34__text.innerHTML="CONTACT US";
		this._text_34.appendChild(this._text_34__text);
		me._text_34.ggIsActive=function() {
			if ((this.parentNode) && (this.parentNode.ggIsActive)) {
				return this.parentNode.ggIsActive();
			}
			return false;
		}
		me._text_34.ggElementNodeId=function() {
			if ((this.parentNode) && (this.parentNode.ggElementNodeId)) {
				return this.parentNode.ggElementNodeId();
			}
			return me.player.getCurrentNode();
		}
		this._text_34.ggUpdatePosition=function (useTransition) {
			if (useTransition==='undefined') {
				useTransition = false;
			}
			if (!useTransition) {
				this.style[domTransition]='none';
			}
			if (this.parentNode) {
				var pw=this.parentNode.clientWidth;
				var w=this.offsetWidth;
					this.style.left=(this.ggDx + pw/2 - w/2) + 'px';
				var ph=this.parentNode.clientHeight;
				var h=this.offsetHeight;
					this.style.top=(this.ggDy + ph/2 - h/2) + 'px';
			}
		}
		this._rectangle_82.appendChild(this._text_34);
		this._rectangle_70.appendChild(this._rectangle_82);
		this._rectangle_81=document.createElement('div');
		this._rectangle_81.ggId="Rectangle 8";
		this._rectangle_81.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1 };
		this._rectangle_81.ggVisible=true;
		this._rectangle_81.className="ggskin ggskin_rectangle ";
		this._rectangle_81.ggType='rectangle';
		hs ='';
		hs+='background : rgba(161,161,163,0.00392157);';
		hs+='border : 2px solid #393939;';
		hs+='cursor : pointer;';
		hs+='height : 9.77444%;';
		hs+='left : 6.23326%;';
		hs+='position : absolute;';
		hs+='top : 73.1203%;';
		hs+='visibility : inherit;';
		hs+='width : 87.2403%;';
		hs+='pointer-events:auto;';
		this._rectangle_81.setAttribute('style',hs);
		this._rectangle_81.style[domTransform + 'Origin']='50% 50%';
		me._rectangle_81.ggIsActive=function() {
			if ((this.parentNode) && (this.parentNode.ggIsActive)) {
				return this.parentNode.ggIsActive();
			}
			return false;
		}
		me._rectangle_81.ggElementNodeId=function() {
			if ((this.parentNode) && (this.parentNode.ggElementNodeId)) {
				return this.parentNode.ggElementNodeId();
			}
			return me.player.getCurrentNode();
		}
		this._rectangle_81.onclick=function (e) {
			me.player.setVariableValue('about', false);
		}
		this._rectangle_81.ggUpdatePosition=function (useTransition) {
		}
		this._text_33=document.createElement('div');
		this._text_33__text=document.createElement('div');
		this._text_33.className='ggskin ggskin_textdiv';
		this._text_33.ggTextDiv=this._text_33__text;
		this._text_33.ggId="Text 3";
		this._text_33.ggDx=-1;
		this._text_33.ggDy=10.5;
		this._text_33.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1 };
		this._text_33.ggVisible=true;
		this._text_33.className="ggskin ggskin_text ";
		this._text_33.ggType='text';
		hs ='';
		hs+='cursor : pointer;';
		hs+='height : 41px;';
		hs+='left : -10000px;';
		hs+='position : absolute;';
		hs+='top : -10000px;';
		hs+='visibility : inherit;';
		hs+='width : 316px;';
		hs+='pointer-events:auto;';
		hs+='font-size: 18px;';
		this._text_33.setAttribute('style',hs);
		this._text_33.style[domTransform + 'Origin']='50% 50%';
		hs ='position:absolute;';
		hs+='left: 0px;';
		hs+='top:  0px;';
		hs+='width: 316px;';
		hs+='height: 41px;';
		hs+='border: 0px solid #000000;';
		hs+='color: rgba(50,50,50,1);';
		hs+='text-align: center;';
		hs+='white-space: pre-wrap;';
		hs+='padding: 0px 1px 0px 1px;';
		hs+='overflow: hidden;';
		this._text_33__text.setAttribute('style',hs);
		this._text_33__text.innerHTML="EXPLORE";
		this._text_33.appendChild(this._text_33__text);
		me._text_33.ggIsActive=function() {
			if ((this.parentNode) && (this.parentNode.ggIsActive)) {
				return this.parentNode.ggIsActive();
			}
			return false;
		}
		me._text_33.ggElementNodeId=function() {
			if ((this.parentNode) && (this.parentNode.ggElementNodeId)) {
				return this.parentNode.ggElementNodeId();
			}
			return me.player.getCurrentNode();
		}
		this._text_33.onclick=function (e) {
			me.player.setVariableValue('about', false);
		}
		this._text_33.ggUpdatePosition=function (useTransition) {
			if (useTransition==='undefined') {
				useTransition = false;
			}
			if (!useTransition) {
				this.style[domTransition]='none';
			}
			if (this.parentNode) {
				var pw=this.parentNode.clientWidth;
				var w=this.offsetWidth;
					this.style.left=(this.ggDx + pw/2 - w/2) + 'px';
				var ph=this.parentNode.clientHeight;
				var h=this.offsetHeight;
					this.style.top=(this.ggDy + ph/2 - h/2) + 'px';
			}
		}
		this._rectangle_81.appendChild(this._text_33);
		this._rectangle_70.appendChild(this._rectangle_81);
		this._svg_12=document.createElement('div');
		this._svg_12__img=document.createElement('img');
		this._svg_12__img.className='ggskin ggskin_svg';
		this._svg_12__img.setAttribute('src',basePath + 'images/svg_12.svg');
		this._svg_12__img.setAttribute('style','position: absolute;top: 0px;left: 0px;width: 100%;height: 100%;-webkit-user-drag:none;pointer-events:none;;');
		this._svg_12__img['ondragstart']=function() { return false; };
		this._svg_12.appendChild(this._svg_12__img);
		this._svg_12.ggId="Svg 1";
		this._svg_12.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1 };
		this._svg_12.ggVisible=true;
		this._svg_12.className="ggskin ggskin_svg ";
		this._svg_12.ggType='svg';
		hs ='';
		hs+='cursor : pointer;';
		hs+='height : 30px;';
		hs+='position : absolute;';
		hs+='right : 4px;';
		hs+='top : 4px;';
		hs+='visibility : inherit;';
		hs+='width : 30px;';
		hs+='pointer-events:auto;';
		this._svg_12.setAttribute('style',hs);
		this._svg_12.style[domTransform + 'Origin']='50% 50%';
		me._svg_12.ggIsActive=function() {
			if ((this.parentNode) && (this.parentNode.ggIsActive)) {
				return this.parentNode.ggIsActive();
			}
			return false;
		}
		me._svg_12.ggElementNodeId=function() {
			if ((this.parentNode) && (this.parentNode.ggElementNodeId)) {
				return this.parentNode.ggElementNodeId();
			}
			return me.player.getCurrentNode();
		}
		this._svg_12.onclick=function (e) {
			me.player.setVariableValue('about', false);
		}
		this._svg_12.ggUpdatePosition=function (useTransition) {
			if (useTransition==='undefined') {
				useTransition = false;
			}
			if (!useTransition) {
				this.style[domTransition]='none';
			}
			if (this.parentNode) {
			}
		}
		this._rectangle_70.appendChild(this._svg_12);
		this._about.appendChild(this._rectangle_70);
		this.divSkin.appendChild(this._about);
		this._caro=document.createElement('div');
		this._caro.ggId="caro";
		this._caro.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1 };
		this._caro.ggVisible=true;
		this._caro.className="ggskin ggskin_container ";
		this._caro.ggType='container';
		hs ='';
		hs+='height : 100%;';
		hs+='left : 0px;';
		hs+='opacity : 0;';
		hs+='position : absolute;';
		hs+='top : 0px;';
		hs+='visibility : hidden;';
		hs+='width : 100%;';
		hs+='pointer-events:none;';
		this._caro.setAttribute('style',hs);
		this._caro.style[domTransform + 'Origin']='50% 50%';
		me._caro.ggIsActive=function() {
			return false;
		}
		me._caro.ggElementNodeId=function() {
			return me.player.getCurrentNode();
		}
		me._caro.logicBlock_alpha = function() {
			var newLogicStateAlpha;
			if (
				(me.player.getVariableValue('caro') == true)
			)
			{
				newLogicStateAlpha = 0;
			}
			else {
				newLogicStateAlpha = -1;
			}
			if (me._caro.ggCurrentLogicStateAlpha != newLogicStateAlpha) {
				me._caro.ggCurrentLogicStateAlpha = newLogicStateAlpha;
				me._caro.style[domTransition]='opacity 1000ms ease 0ms, visibility 1000ms ease 0ms';
				if (me._caro.ggCurrentLogicStateAlpha == 0) {
					me._caro.style.visibility=me._caro.ggVisible?'inherit':'hidden';
					me._caro.style.opacity=1;
				}
				else {
					me._caro.style.visibility="hidden";
					me._caro.style.opacity=0;
				}
			}
		}
		this._caro.ggUpdatePosition=function (useTransition) {
		}
		this._rectangle_6=document.createElement('div');
		this._rectangle_6.ggId="Rectangle 6";
		this._rectangle_6.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1 };
		this._rectangle_6.ggVisible=true;
		this._rectangle_6.className="ggskin ggskin_rectangle ";
		this._rectangle_6.ggType='rectangle';
		hs ='';
		hs+='background : rgba(0,0,0,0.705882);';
		hs+='border : 0px solid #000000;';
		hs+='cursor : default;';
		hs+='height : 100%;';
		hs+='left : 0px;';
		hs+='position : absolute;';
		hs+='top : 0px;';
		hs+='visibility : inherit;';
		hs+='width : 100%;';
		hs+='pointer-events:auto;';
		this._rectangle_6.setAttribute('style',hs);
		this._rectangle_6.style[domTransform + 'Origin']='50% 50%';
		me._rectangle_6.ggIsActive=function() {
			if ((this.parentNode) && (this.parentNode.ggIsActive)) {
				return this.parentNode.ggIsActive();
			}
			return false;
		}
		me._rectangle_6.ggElementNodeId=function() {
			if ((this.parentNode) && (this.parentNode.ggElementNodeId)) {
				return this.parentNode.ggElementNodeId();
			}
			return me.player.getCurrentNode();
		}
		this._rectangle_6.onclick=function (e) {
			me.player.setVariableValue('caro', false);
		}
		this._rectangle_6.ggUpdatePosition=function (useTransition) {
		}
		this._caro.appendChild(this._rectangle_6);
		this._rectangle_7=document.createElement('div');
		this._rectangle_7.ggId="Rectangle 7";
		this._rectangle_7.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1 };
		this._rectangle_7.ggVisible=true;
		this._rectangle_7.className="ggskin ggskin_rectangle ";
		this._rectangle_7.ggType='rectangle';
		hs ='';
		hs+=cssPrefix + 'border-radius : 4px;';
		hs+='border-radius : 4px;';
		hs+='background : rgba(255,255,255,0.882353);';
		hs+='border : 0px solid #000000;';
		hs+='cursor : default;';
		hs+='height : 79.7601%;';
		hs+='left : 4.8%;';
		hs+='position : absolute;';
		hs+='top : 7.95%;';
		hs+='visibility : inherit;';
		hs+='width : 89.8667%;';
		hs+='pointer-events:auto;';
		this._rectangle_7.setAttribute('style',hs);
		this._rectangle_7.style[domTransform + 'Origin']='50% 50%';
		me._rectangle_7.ggIsActive=function() {
			if ((this.parentNode) && (this.parentNode.ggIsActive)) {
				return this.parentNode.ggIsActive();
			}
			return false;
		}
		me._rectangle_7.ggElementNodeId=function() {
			if ((this.parentNode) && (this.parentNode.ggElementNodeId)) {
				return this.parentNode.ggElementNodeId();
			}
			return me.player.getCurrentNode();
		}
		me._rectangle_7.logicBlock_position = function() {
			var newLogicStatePosition;
			if (
				(me.player.getViewerSize().width > 1150) && 
				(me.player.getViewerSize().width < 2000)
			)
			{
				newLogicStatePosition = 0;
			}
			else if (
				(me.player.getViewerSize().width > 2000)
			)
			{
				newLogicStatePosition = 1;
			}
			else {
				newLogicStatePosition = -1;
			}
			if (me._rectangle_7.ggCurrentLogicStatePosition != newLogicStatePosition) {
				me._rectangle_7.ggCurrentLogicStatePosition = newLogicStatePosition;
				me._rectangle_7.style[domTransition]='left 0s, top 0s, width 0s, height 0s';
				if (me._rectangle_7.ggCurrentLogicStatePosition == 0) {
					me._rectangle_7.style.left='35%';
					me._rectangle_7.style.top='15%';
				}
				else if (me._rectangle_7.ggCurrentLogicStatePosition == 1) {
					me._rectangle_7.style.left='41%';
					me._rectangle_7.style.top='20%';
				}
				else {
					me._rectangle_7.style.left='4.8%';
					me._rectangle_7.style.top='7.95%';
				}
			}
		}
		me._rectangle_7.logicBlock_size = function() {
			var newLogicStateSize;
			if (
				(me.player.getViewerSize().width > 1150) && 
				(me.player.getViewerSize().width < 2000)
			)
			{
				newLogicStateSize = 0;
			}
			else if (
				(me.player.getViewerSize().width > 2000)
			)
			{
				newLogicStateSize = 1;
			}
			else {
				newLogicStateSize = -1;
			}
			if (me._rectangle_7.ggCurrentLogicStateSize != newLogicStateSize) {
				me._rectangle_7.ggCurrentLogicStateSize = newLogicStateSize;
				me._rectangle_7.style[domTransition]='left 0s, top 0s, width 0s, height 0s';
				if (me._rectangle_7.ggCurrentLogicStateSize == 0) {
					me._rectangle_7.style.width='30%';
					me._rectangle_7.style.height='60%';
					me.updateSize(me._rectangle_7);
				}
				else if (me._rectangle_7.ggCurrentLogicStateSize == 1) {
					me._rectangle_7.style.width='18%';
					me._rectangle_7.style.height='40%';
					me.updateSize(me._rectangle_7);
				}
				else {
					me._rectangle_7.style.width='89.8667%';
					me._rectangle_7.style.height='79.7601%';
					me.updateSize(me._rectangle_7);
				}
			}
		}
		this._rectangle_7.ggUpdatePosition=function (useTransition) {
		}
		this._text_32=document.createElement('div');
		this._text_32__text=document.createElement('div');
		this._text_32.className='ggskin ggskin_textdiv';
		this._text_32.ggTextDiv=this._text_32__text;
		this._text_32.ggId="Text 3";
		this._text_32.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1 };
		this._text_32.ggVisible=true;
		this._text_32.className="ggskin ggskin_text ";
		this._text_32.ggType='text';
		hs ='';
		hs+='height : 52.2556%;';
		hs+='left : 6.53%;';
		hs+='position : absolute;';
		hs+='top : 80px;';
		hs+='visibility : inherit;';
		hs+='width : 87.2403%;';
		hs+='pointer-events:auto;';
		hs+='font-size: 16px;';
		this._text_32.setAttribute('style',hs);
		this._text_32.style[domTransform + 'Origin']='50% 50%';
		hs ='position:absolute;';
		hs+='cursor: default;';
		hs+='left: 0px;';
		hs+='top:  0px;';
		hs+='width: 100%;';
		hs+='height: 100%;';
		hs+='border: 0px solid #000000;';
		hs+='color: #000000;';
		hs+='text-align: center;';
		hs+='white-space: pre-wrap;';
		hs+='padding: 0px 1px 0px 1px;';
		hs+='overflow: hidden;';
		hs+='overflow-y: auto;';
		this._text_32__text.setAttribute('style',hs);
		this._text_32__text.innerHTML="It\u2019s so good to have you here.<br\/><br\/>My name is <b>Carolina<\/b>, the person that\u2019s behind the vertical gardens.<br\/><br\/>With every one of my sustainable living spaces I\u2019m looking to tell a story, one that can grow and transform itself over time.<br\/><br\/>I am very passionate about being authentic and unique with every single thing I do.";
		this._text_32.appendChild(this._text_32__text);
		me._text_32.ggIsActive=function() {
			if ((this.parentNode) && (this.parentNode.ggIsActive)) {
				return this.parentNode.ggIsActive();
			}
			return false;
		}
		me._text_32.ggElementNodeId=function() {
			if ((this.parentNode) && (this.parentNode.ggElementNodeId)) {
				return this.parentNode.ggElementNodeId();
			}
			return me.player.getCurrentNode();
		}
		this._text_32.ggUpdatePosition=function (useTransition) {
		}
		this._rectangle_7.appendChild(this._text_32);
		this._text_31=document.createElement('div');
		this._text_31__text=document.createElement('div');
		this._text_31.className='ggskin ggskin_textdiv';
		this._text_31.ggTextDiv=this._text_31__text;
		this._text_31.ggId="Text 3";
		this._text_31.ggDx=-1;
		this._text_31.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1 };
		this._text_31.ggVisible=true;
		this._text_31.className="ggskin ggskin_text ";
		this._text_31.ggType='text';
		hs ='';
		hs+='height : 41px;';
		hs+='left : -10000px;';
		hs+='position : absolute;';
		hs+='top : 27px;';
		hs+='visibility : inherit;';
		hs+='width : 316px;';
		hs+='pointer-events:auto;';
		hs+='font-size: 24px;';
		this._text_31.setAttribute('style',hs);
		this._text_31.style[domTransform + 'Origin']='50% 50%';
		hs ='position:absolute;';
		hs+='cursor: default;';
		hs+='left: 0px;';
		hs+='top:  0px;';
		hs+='width: 316px;';
		hs+='height: 41px;';
		hs+='border: 0px solid #000000;';
		hs+='color: rgba(141,180,52,1);';
		hs+='text-align: center;';
		hs+='white-space: pre-wrap;';
		hs+='padding: 0px 1px 0px 1px;';
		hs+='overflow: hidden;';
		this._text_31__text.setAttribute('style',hs);
		this._text_31__text.innerHTML="WELCOME!";
		this._text_31.appendChild(this._text_31__text);
		me._text_31.ggIsActive=function() {
			if ((this.parentNode) && (this.parentNode.ggIsActive)) {
				return this.parentNode.ggIsActive();
			}
			return false;
		}
		me._text_31.ggElementNodeId=function() {
			if ((this.parentNode) && (this.parentNode.ggElementNodeId)) {
				return this.parentNode.ggElementNodeId();
			}
			return me.player.getCurrentNode();
		}
		this._text_31.ggUpdatePosition=function (useTransition) {
			if (useTransition==='undefined') {
				useTransition = false;
			}
			if (!useTransition) {
				this.style[domTransition]='none';
			}
			if (this.parentNode) {
				var pw=this.parentNode.clientWidth;
				var w=this.offsetWidth;
					this.style.left=(this.ggDx + pw/2 - w/2) + 'px';
			}
		}
		this._rectangle_7.appendChild(this._text_31);
		this._rectangle_80=document.createElement('div');
		this._rectangle_80.ggId="Rectangle 8";
		this._rectangle_80.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1 };
		this._rectangle_80.ggVisible=true;
		this._rectangle_80.className="ggskin ggskin_rectangle ";
		this._rectangle_80.ggType='rectangle';
		hs ='';
		hs+='background : #8db434;';
		hs+='border : 0px solid #000000;';
		hs+='cursor : pointer;';
		hs+='height : 9.77444%;';
		hs+='left : 6.23145%;';
		hs+='position : absolute;';
		hs+='top : 86.47%;';
		hs+='visibility : inherit;';
		hs+='width : 87.2403%;';
		hs+='pointer-events:auto;';
		this._rectangle_80.setAttribute('style',hs);
		this._rectangle_80.style[domTransform + 'Origin']='50% 50%';
		me._rectangle_80.ggIsActive=function() {
			if ((this.parentNode) && (this.parentNode.ggIsActive)) {
				return this.parentNode.ggIsActive();
			}
			return false;
		}
		me._rectangle_80.ggElementNodeId=function() {
			if ((this.parentNode) && (this.parentNode.ggElementNodeId)) {
				return this.parentNode.ggElementNodeId();
			}
			return me.player.getCurrentNode();
		}
		this._rectangle_80.onclick=function (e) {
			me.player.openUrl("http:\/\/cspace.online\/muses\/symbiotikwalls\/new7\/en\/contact.php","_self");
		}
		this._rectangle_80.ggUpdatePosition=function (useTransition) {
		}
		this._text_30=document.createElement('div');
		this._text_30__text=document.createElement('div');
		this._text_30.className='ggskin ggskin_textdiv';
		this._text_30.ggTextDiv=this._text_30__text;
		this._text_30.ggId="Text 3";
		this._text_30.ggDx=-1;
		this._text_30.ggDy=10.5;
		this._text_30.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1 };
		this._text_30.ggVisible=true;
		this._text_30.className="ggskin ggskin_text ";
		this._text_30.ggType='text';
		hs ='';
		hs+='cursor : pointer;';
		hs+='height : 41px;';
		hs+='left : -10000px;';
		hs+='position : absolute;';
		hs+='top : -10000px;';
		hs+='visibility : inherit;';
		hs+='width : 316px;';
		hs+='pointer-events:auto;';
		hs+='font-size: 18px;';
		this._text_30.setAttribute('style',hs);
		this._text_30.style[domTransform + 'Origin']='50% 50%';
		hs ='position:absolute;';
		hs+='left: 0px;';
		hs+='top:  0px;';
		hs+='width: 316px;';
		hs+='height: 41px;';
		hs+='border: 0px solid #000000;';
		hs+='color: rgba(255,255,255,1);';
		hs+='text-align: center;';
		hs+='white-space: pre-wrap;';
		hs+='padding: 0px 1px 0px 1px;';
		hs+='overflow: hidden;';
		this._text_30__text.setAttribute('style',hs);
		this._text_30__text.innerHTML="CONTACT US";
		this._text_30.appendChild(this._text_30__text);
		me._text_30.ggIsActive=function() {
			if ((this.parentNode) && (this.parentNode.ggIsActive)) {
				return this.parentNode.ggIsActive();
			}
			return false;
		}
		me._text_30.ggElementNodeId=function() {
			if ((this.parentNode) && (this.parentNode.ggElementNodeId)) {
				return this.parentNode.ggElementNodeId();
			}
			return me.player.getCurrentNode();
		}
		this._text_30.ggUpdatePosition=function (useTransition) {
			if (useTransition==='undefined') {
				useTransition = false;
			}
			if (!useTransition) {
				this.style[domTransition]='none';
			}
			if (this.parentNode) {
				var pw=this.parentNode.clientWidth;
				var w=this.offsetWidth;
					this.style.left=(this.ggDx + pw/2 - w/2) + 'px';
				var ph=this.parentNode.clientHeight;
				var h=this.offsetHeight;
					this.style.top=(this.ggDy + ph/2 - h/2) + 'px';
			}
		}
		this._rectangle_80.appendChild(this._text_30);
		this._rectangle_7.appendChild(this._rectangle_80);
		this._rectangle_8=document.createElement('div');
		this._rectangle_8.ggId="Rectangle 8";
		this._rectangle_8.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1 };
		this._rectangle_8.ggVisible=true;
		this._rectangle_8.className="ggskin ggskin_rectangle ";
		this._rectangle_8.ggType='rectangle';
		hs ='';
		hs+='background : rgba(161,161,163,0.00392157);';
		hs+='border : 2px solid #393939;';
		hs+='cursor : pointer;';
		hs+='height : 9.77444%;';
		hs+='left : 6.23326%;';
		hs+='position : absolute;';
		hs+='top : 73.1203%;';
		hs+='visibility : inherit;';
		hs+='width : 87.2403%;';
		hs+='pointer-events:auto;';
		this._rectangle_8.setAttribute('style',hs);
		this._rectangle_8.style[domTransform + 'Origin']='50% 50%';
		me._rectangle_8.ggIsActive=function() {
			if ((this.parentNode) && (this.parentNode.ggIsActive)) {
				return this.parentNode.ggIsActive();
			}
			return false;
		}
		me._rectangle_8.ggElementNodeId=function() {
			if ((this.parentNode) && (this.parentNode.ggElementNodeId)) {
				return this.parentNode.ggElementNodeId();
			}
			return me.player.getCurrentNode();
		}
		this._rectangle_8.onclick=function (e) {
			me.player.setVariableValue('caro', false);
		}
		this._rectangle_8.ggUpdatePosition=function (useTransition) {
		}
		this._text_3=document.createElement('div');
		this._text_3__text=document.createElement('div');
		this._text_3.className='ggskin ggskin_textdiv';
		this._text_3.ggTextDiv=this._text_3__text;
		this._text_3.ggId="Text 3";
		this._text_3.ggDx=-1;
		this._text_3.ggDy=10.5;
		this._text_3.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1 };
		this._text_3.ggVisible=true;
		this._text_3.className="ggskin ggskin_text ";
		this._text_3.ggType='text';
		hs ='';
		hs+='cursor : pointer;';
		hs+='height : 41px;';
		hs+='left : -10000px;';
		hs+='position : absolute;';
		hs+='top : -10000px;';
		hs+='visibility : inherit;';
		hs+='width : 316px;';
		hs+='pointer-events:auto;';
		hs+='font-size: 18px;';
		this._text_3.setAttribute('style',hs);
		this._text_3.style[domTransform + 'Origin']='50% 50%';
		hs ='position:absolute;';
		hs+='left: 0px;';
		hs+='top:  0px;';
		hs+='width: 316px;';
		hs+='height: 41px;';
		hs+='border: 0px solid #000000;';
		hs+='color: rgba(50,50,50,1);';
		hs+='text-align: center;';
		hs+='white-space: pre-wrap;';
		hs+='padding: 0px 1px 0px 1px;';
		hs+='overflow: hidden;';
		this._text_3__text.setAttribute('style',hs);
		this._text_3__text.innerHTML="EXPLORE";
		this._text_3.appendChild(this._text_3__text);
		me._text_3.ggIsActive=function() {
			if ((this.parentNode) && (this.parentNode.ggIsActive)) {
				return this.parentNode.ggIsActive();
			}
			return false;
		}
		me._text_3.ggElementNodeId=function() {
			if ((this.parentNode) && (this.parentNode.ggElementNodeId)) {
				return this.parentNode.ggElementNodeId();
			}
			return me.player.getCurrentNode();
		}
		this._text_3.onclick=function (e) {
			me.player.setVariableValue('caro', false);
		}
		this._text_3.ggUpdatePosition=function (useTransition) {
			if (useTransition==='undefined') {
				useTransition = false;
			}
			if (!useTransition) {
				this.style[domTransition]='none';
			}
			if (this.parentNode) {
				var pw=this.parentNode.clientWidth;
				var w=this.offsetWidth;
					this.style.left=(this.ggDx + pw/2 - w/2) + 'px';
				var ph=this.parentNode.clientHeight;
				var h=this.offsetHeight;
					this.style.top=(this.ggDy + ph/2 - h/2) + 'px';
			}
		}
		this._rectangle_8.appendChild(this._text_3);
		this._rectangle_7.appendChild(this._rectangle_8);
		this._svg_11=document.createElement('div');
		this._svg_11__img=document.createElement('img');
		this._svg_11__img.className='ggskin ggskin_svg';
		this._svg_11__img.setAttribute('src',basePath + 'images/svg_11.svg');
		this._svg_11__img.setAttribute('style','position: absolute;top: 0px;left: 0px;width: 100%;height: 100%;-webkit-user-drag:none;pointer-events:none;;');
		this._svg_11__img['ondragstart']=function() { return false; };
		this._svg_11.appendChild(this._svg_11__img);
		this._svg_11.ggId="Svg 1";
		this._svg_11.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1 };
		this._svg_11.ggVisible=true;
		this._svg_11.className="ggskin ggskin_svg ";
		this._svg_11.ggType='svg';
		hs ='';
		hs+='cursor : pointer;';
		hs+='height : 30px;';
		hs+='position : absolute;';
		hs+='right : 4px;';
		hs+='top : 4px;';
		hs+='visibility : inherit;';
		hs+='width : 30px;';
		hs+='pointer-events:auto;';
		this._svg_11.setAttribute('style',hs);
		this._svg_11.style[domTransform + 'Origin']='50% 50%';
		me._svg_11.ggIsActive=function() {
			if ((this.parentNode) && (this.parentNode.ggIsActive)) {
				return this.parentNode.ggIsActive();
			}
			return false;
		}
		me._svg_11.ggElementNodeId=function() {
			if ((this.parentNode) && (this.parentNode.ggElementNodeId)) {
				return this.parentNode.ggElementNodeId();
			}
			return me.player.getCurrentNode();
		}
		this._svg_11.onclick=function (e) {
			me.player.setVariableValue('caro', false);
		}
		this._svg_11.ggUpdatePosition=function (useTransition) {
			if (useTransition==='undefined') {
				useTransition = false;
			}
			if (!useTransition) {
				this.style[domTransition]='none';
			}
			if (this.parentNode) {
			}
		}
		this._rectangle_7.appendChild(this._svg_11);
		this._caro.appendChild(this._rectangle_7);
		this.divSkin.appendChild(this._caro);
		this.player.addListener('sizechanged', function() {
			me.updateSize(me.divSkin);
		});
	};
	this.hotspotProxyClick=function(id) {
	}
	this.hotspotProxyDoubleClick=function(id) {
	}
	this.hotspotProxyOver=function(id) {
	}
	this.hotspotProxyOut=function(id) {
	}
	me.callChildLogicBlocksHotspot_ht_walls_sizechanged = function(){
		if(hotspotTemplates['ht_walls']) {
			var i;
			for(i = 0; i < hotspotTemplates['ht_walls'].length; i++) {
				if (hotspotTemplates['ht_walls'][i]._ht_walls.logicBlock_scaling) {
					hotspotTemplates['ht_walls'][i]._ht_walls.logicBlock_scaling();
				}
			}
		}
	}
	me.callChildLogicBlocksHotspot_ht_walls_changenodeid = function(){
		if(hotspotTemplates['ht_walls']) {
			var i;
			for(i = 0; i < hotspotTemplates['ht_walls'].length; i++) {
				if (hotspotTemplates['ht_walls'][i]._rectangle_43.logicBlock_size) {
					hotspotTemplates['ht_walls'][i]._rectangle_43.logicBlock_size();
				}
				if (hotspotTemplates['ht_walls'][i]._rectangle_53.logicBlock_alpha) {
					hotspotTemplates['ht_walls'][i]._rectangle_53.logicBlock_alpha();
				}
				if (hotspotTemplates['ht_walls'][i]._rectangle_53.logicBlock_size) {
					hotspotTemplates['ht_walls'][i]._rectangle_53.logicBlock_size();
				}
				if (hotspotTemplates['ht_walls'][i]._svg_18.logicBlock_scaling) {
					hotspotTemplates['ht_walls'][i]._svg_18.logicBlock_scaling();
				}
				if (hotspotTemplates['ht_walls'][i]._svg_18.logicBlock_angle) {
					hotspotTemplates['ht_walls'][i]._svg_18.logicBlock_angle();
				}
				if (hotspotTemplates['ht_walls'][i]._more_info5.logicBlock_alpha) {
					hotspotTemplates['ht_walls'][i]._more_info5.logicBlock_alpha();
				}
				if (hotspotTemplates['ht_walls'][i]._more_info5.logicBlock_position) {
					hotspotTemplates['ht_walls'][i]._more_info5.logicBlock_position();
				}
				if (hotspotTemplates['ht_walls'][i]._close3.logicBlock_alpha) {
					hotspotTemplates['ht_walls'][i]._close3.logicBlock_alpha();
				}
				if (hotspotTemplates['ht_walls'][i]._close3.logicBlock_position) {
					hotspotTemplates['ht_walls'][i]._close3.logicBlock_position();
				}
			}
		}
	}
	me.callChildLogicBlocksHotspot_ht_walls_varchanged_info = function(){
		if(hotspotTemplates['ht_walls']) {
			var i;
			for(i = 0; i < hotspotTemplates['ht_walls'].length; i++) {
				if (hotspotTemplates['ht_walls'][i]._rectangle_43.logicBlock_size) {
					hotspotTemplates['ht_walls'][i]._rectangle_43.logicBlock_size();
				}
				if (hotspotTemplates['ht_walls'][i]._rectangle_53.logicBlock_alpha) {
					hotspotTemplates['ht_walls'][i]._rectangle_53.logicBlock_alpha();
				}
				if (hotspotTemplates['ht_walls'][i]._rectangle_53.logicBlock_size) {
					hotspotTemplates['ht_walls'][i]._rectangle_53.logicBlock_size();
				}
				if (hotspotTemplates['ht_walls'][i]._svg_18.logicBlock_scaling) {
					hotspotTemplates['ht_walls'][i]._svg_18.logicBlock_scaling();
				}
				if (hotspotTemplates['ht_walls'][i]._svg_18.logicBlock_angle) {
					hotspotTemplates['ht_walls'][i]._svg_18.logicBlock_angle();
				}
				if (hotspotTemplates['ht_walls'][i]._more_info5.logicBlock_alpha) {
					hotspotTemplates['ht_walls'][i]._more_info5.logicBlock_alpha();
				}
				if (hotspotTemplates['ht_walls'][i]._more_info5.logicBlock_position) {
					hotspotTemplates['ht_walls'][i]._more_info5.logicBlock_position();
				}
				if (hotspotTemplates['ht_walls'][i]._close3.logicBlock_alpha) {
					hotspotTemplates['ht_walls'][i]._close3.logicBlock_alpha();
				}
				if (hotspotTemplates['ht_walls'][i]._close3.logicBlock_position) {
					hotspotTemplates['ht_walls'][i]._close3.logicBlock_position();
				}
			}
		}
	}
	me.callChildLogicBlocksHotspot_ht_frames_sizechanged = function(){
		if(hotspotTemplates['ht_frames']) {
			var i;
			for(i = 0; i < hotspotTemplates['ht_frames'].length; i++) {
				if (hotspotTemplates['ht_frames'][i]._green_walls5.logicBlock_scaling) {
					hotspotTemplates['ht_frames'][i]._green_walls5.logicBlock_scaling();
				}
			}
		}
	}
	me.callChildLogicBlocksHotspot_ht_frames_changenodeid = function(){
		if(hotspotTemplates['ht_frames']) {
			var i;
			for(i = 0; i < hotspotTemplates['ht_frames'].length; i++) {
				if (hotspotTemplates['ht_frames'][i]._rectangle_42.logicBlock_size) {
					hotspotTemplates['ht_frames'][i]._rectangle_42.logicBlock_size();
				}
				if (hotspotTemplates['ht_frames'][i]._rectangle_52.logicBlock_alpha) {
					hotspotTemplates['ht_frames'][i]._rectangle_52.logicBlock_alpha();
				}
				if (hotspotTemplates['ht_frames'][i]._rectangle_52.logicBlock_size) {
					hotspotTemplates['ht_frames'][i]._rectangle_52.logicBlock_size();
				}
				if (hotspotTemplates['ht_frames'][i]._svg_17.logicBlock_scaling) {
					hotspotTemplates['ht_frames'][i]._svg_17.logicBlock_scaling();
				}
				if (hotspotTemplates['ht_frames'][i]._svg_17.logicBlock_angle) {
					hotspotTemplates['ht_frames'][i]._svg_17.logicBlock_angle();
				}
				if (hotspotTemplates['ht_frames'][i]._more_info4.logicBlock_alpha) {
					hotspotTemplates['ht_frames'][i]._more_info4.logicBlock_alpha();
				}
				if (hotspotTemplates['ht_frames'][i]._more_info4.logicBlock_position) {
					hotspotTemplates['ht_frames'][i]._more_info4.logicBlock_position();
				}
				if (hotspotTemplates['ht_frames'][i]._close2.logicBlock_alpha) {
					hotspotTemplates['ht_frames'][i]._close2.logicBlock_alpha();
				}
				if (hotspotTemplates['ht_frames'][i]._close2.logicBlock_position) {
					hotspotTemplates['ht_frames'][i]._close2.logicBlock_position();
				}
			}
		}
	}
	me.callChildLogicBlocksHotspot_ht_frames_varchanged_info = function(){
		if(hotspotTemplates['ht_frames']) {
			var i;
			for(i = 0; i < hotspotTemplates['ht_frames'].length; i++) {
				if (hotspotTemplates['ht_frames'][i]._rectangle_42.logicBlock_size) {
					hotspotTemplates['ht_frames'][i]._rectangle_42.logicBlock_size();
				}
				if (hotspotTemplates['ht_frames'][i]._rectangle_52.logicBlock_alpha) {
					hotspotTemplates['ht_frames'][i]._rectangle_52.logicBlock_alpha();
				}
				if (hotspotTemplates['ht_frames'][i]._rectangle_52.logicBlock_size) {
					hotspotTemplates['ht_frames'][i]._rectangle_52.logicBlock_size();
				}
				if (hotspotTemplates['ht_frames'][i]._svg_17.logicBlock_scaling) {
					hotspotTemplates['ht_frames'][i]._svg_17.logicBlock_scaling();
				}
				if (hotspotTemplates['ht_frames'][i]._svg_17.logicBlock_angle) {
					hotspotTemplates['ht_frames'][i]._svg_17.logicBlock_angle();
				}
				if (hotspotTemplates['ht_frames'][i]._more_info4.logicBlock_alpha) {
					hotspotTemplates['ht_frames'][i]._more_info4.logicBlock_alpha();
				}
				if (hotspotTemplates['ht_frames'][i]._more_info4.logicBlock_position) {
					hotspotTemplates['ht_frames'][i]._more_info4.logicBlock_position();
				}
				if (hotspotTemplates['ht_frames'][i]._close2.logicBlock_alpha) {
					hotspotTemplates['ht_frames'][i]._close2.logicBlock_alpha();
				}
				if (hotspotTemplates['ht_frames'][i]._close2.logicBlock_position) {
					hotspotTemplates['ht_frames'][i]._close2.logicBlock_position();
				}
			}
		}
	}
	me.callChildLogicBlocksHotspot_ht_example_sizechanged = function(){
		if(hotspotTemplates['ht_example']) {
			var i;
			for(i = 0; i < hotspotTemplates['ht_example'].length; i++) {
				if (hotspotTemplates['ht_example'][i]._green_walls4.logicBlock_scaling) {
					hotspotTemplates['ht_example'][i]._green_walls4.logicBlock_scaling();
				}
			}
		}
	}
	me.callChildLogicBlocksHotspot_ht_example_changenodeid = function(){
		if(hotspotTemplates['ht_example']) {
			var i;
			for(i = 0; i < hotspotTemplates['ht_example'].length; i++) {
				if (hotspotTemplates['ht_example'][i]._rectangle_41.logicBlock_size) {
					hotspotTemplates['ht_example'][i]._rectangle_41.logicBlock_size();
				}
				if (hotspotTemplates['ht_example'][i]._rectangle_51.logicBlock_alpha) {
					hotspotTemplates['ht_example'][i]._rectangle_51.logicBlock_alpha();
				}
				if (hotspotTemplates['ht_example'][i]._rectangle_51.logicBlock_size) {
					hotspotTemplates['ht_example'][i]._rectangle_51.logicBlock_size();
				}
				if (hotspotTemplates['ht_example'][i]._svg_16.logicBlock_scaling) {
					hotspotTemplates['ht_example'][i]._svg_16.logicBlock_scaling();
				}
				if (hotspotTemplates['ht_example'][i]._svg_16.logicBlock_angle) {
					hotspotTemplates['ht_example'][i]._svg_16.logicBlock_angle();
				}
				if (hotspotTemplates['ht_example'][i]._more_info3.logicBlock_alpha) {
					hotspotTemplates['ht_example'][i]._more_info3.logicBlock_alpha();
				}
				if (hotspotTemplates['ht_example'][i]._more_info3.logicBlock_position) {
					hotspotTemplates['ht_example'][i]._more_info3.logicBlock_position();
				}
				if (hotspotTemplates['ht_example'][i]._close1.logicBlock_alpha) {
					hotspotTemplates['ht_example'][i]._close1.logicBlock_alpha();
				}
				if (hotspotTemplates['ht_example'][i]._close1.logicBlock_position) {
					hotspotTemplates['ht_example'][i]._close1.logicBlock_position();
				}
			}
		}
	}
	me.callChildLogicBlocksHotspot_ht_example_varchanged_info = function(){
		if(hotspotTemplates['ht_example']) {
			var i;
			for(i = 0; i < hotspotTemplates['ht_example'].length; i++) {
				if (hotspotTemplates['ht_example'][i]._rectangle_41.logicBlock_size) {
					hotspotTemplates['ht_example'][i]._rectangle_41.logicBlock_size();
				}
				if (hotspotTemplates['ht_example'][i]._rectangle_51.logicBlock_alpha) {
					hotspotTemplates['ht_example'][i]._rectangle_51.logicBlock_alpha();
				}
				if (hotspotTemplates['ht_example'][i]._rectangle_51.logicBlock_size) {
					hotspotTemplates['ht_example'][i]._rectangle_51.logicBlock_size();
				}
				if (hotspotTemplates['ht_example'][i]._svg_16.logicBlock_scaling) {
					hotspotTemplates['ht_example'][i]._svg_16.logicBlock_scaling();
				}
				if (hotspotTemplates['ht_example'][i]._svg_16.logicBlock_angle) {
					hotspotTemplates['ht_example'][i]._svg_16.logicBlock_angle();
				}
				if (hotspotTemplates['ht_example'][i]._more_info3.logicBlock_alpha) {
					hotspotTemplates['ht_example'][i]._more_info3.logicBlock_alpha();
				}
				if (hotspotTemplates['ht_example'][i]._more_info3.logicBlock_position) {
					hotspotTemplates['ht_example'][i]._more_info3.logicBlock_position();
				}
				if (hotspotTemplates['ht_example'][i]._close1.logicBlock_alpha) {
					hotspotTemplates['ht_example'][i]._close1.logicBlock_alpha();
				}
				if (hotspotTemplates['ht_example'][i]._close1.logicBlock_position) {
					hotspotTemplates['ht_example'][i]._close1.logicBlock_position();
				}
			}
		}
	}
	me.callChildLogicBlocksHotspot_ht_info_sizechanged = function(){
		if(hotspotTemplates['ht_info']) {
			var i;
			for(i = 0; i < hotspotTemplates['ht_info'].length; i++) {
				if (hotspotTemplates['ht_info'][i]._green_walls3.logicBlock_scaling) {
					hotspotTemplates['ht_info'][i]._green_walls3.logicBlock_scaling();
				}
			}
		}
	}
	me.callChildLogicBlocksHotspot_ht_info_changenodeid = function(){
		if(hotspotTemplates['ht_info']) {
			var i;
			for(i = 0; i < hotspotTemplates['ht_info'].length; i++) {
				if (hotspotTemplates['ht_info'][i]._svg_15.logicBlock_scaling) {
					hotspotTemplates['ht_info'][i]._svg_15.logicBlock_scaling();
				}
				if (hotspotTemplates['ht_info'][i]._svg_15.logicBlock_angle) {
					hotspotTemplates['ht_info'][i]._svg_15.logicBlock_angle();
				}
				if (hotspotTemplates['ht_info'][i]._more_info2.logicBlock_alpha) {
					hotspotTemplates['ht_info'][i]._more_info2.logicBlock_alpha();
				}
			}
		}
	}
	me.callChildLogicBlocksHotspot_ht_info_varchanged_about = function(){
		if(hotspotTemplates['ht_info']) {
			var i;
			for(i = 0; i < hotspotTemplates['ht_info'].length; i++) {
				if (hotspotTemplates['ht_info'][i]._more_info2.logicBlock_alpha) {
					hotspotTemplates['ht_info'][i]._more_info2.logicBlock_alpha();
				}
			}
		}
	}
	me.callChildLogicBlocksHotspot_ht_info_varchanged_info = function(){
		if(hotspotTemplates['ht_info']) {
			var i;
			for(i = 0; i < hotspotTemplates['ht_info'].length; i++) {
				if (hotspotTemplates['ht_info'][i]._svg_15.logicBlock_scaling) {
					hotspotTemplates['ht_info'][i]._svg_15.logicBlock_scaling();
				}
				if (hotspotTemplates['ht_info'][i]._svg_15.logicBlock_angle) {
					hotspotTemplates['ht_info'][i]._svg_15.logicBlock_angle();
				}
			}
		}
	}
	me.callChildLogicBlocksHotspot_ht_caro_sizechanged = function(){
		if(hotspotTemplates['ht_caro']) {
			var i;
			for(i = 0; i < hotspotTemplates['ht_caro'].length; i++) {
				if (hotspotTemplates['ht_caro'][i]._ht_caro.logicBlock_scaling) {
					hotspotTemplates['ht_caro'][i]._ht_caro.logicBlock_scaling();
				}
				if (hotspotTemplates['ht_caro'][i]._green_walls2.logicBlock_scaling) {
					hotspotTemplates['ht_caro'][i]._green_walls2.logicBlock_scaling();
				}
			}
		}
	}
	me.callChildLogicBlocksHotspot_ht_products_sizechanged = function(){
		if(hotspotTemplates['ht_products']) {
			var i;
			for(i = 0; i < hotspotTemplates['ht_products'].length; i++) {
				if (hotspotTemplates['ht_products'][i]._green_walls1.logicBlock_scaling) {
					hotspotTemplates['ht_products'][i]._green_walls1.logicBlock_scaling();
				}
			}
		}
	}
	me.callChildLogicBlocksHotspot_ht_products_changenodeid = function(){
		if(hotspotTemplates['ht_products']) {
			var i;
			for(i = 0; i < hotspotTemplates['ht_products'].length; i++) {
				if (hotspotTemplates['ht_products'][i]._svg_14.logicBlock_scaling) {
					hotspotTemplates['ht_products'][i]._svg_14.logicBlock_scaling();
				}
				if (hotspotTemplates['ht_products'][i]._svg_14.logicBlock_angle) {
					hotspotTemplates['ht_products'][i]._svg_14.logicBlock_angle();
				}
				if (hotspotTemplates['ht_products'][i]._more_info1.logicBlock_alpha) {
					hotspotTemplates['ht_products'][i]._more_info1.logicBlock_alpha();
				}
			}
		}
	}
	me.callChildLogicBlocksHotspot_ht_products_varchanged_about = function(){
		if(hotspotTemplates['ht_products']) {
			var i;
			for(i = 0; i < hotspotTemplates['ht_products'].length; i++) {
				if (hotspotTemplates['ht_products'][i]._more_info1.logicBlock_alpha) {
					hotspotTemplates['ht_products'][i]._more_info1.logicBlock_alpha();
				}
			}
		}
	}
	me.callChildLogicBlocksHotspot_ht_products_varchanged_info = function(){
		if(hotspotTemplates['ht_products']) {
			var i;
			for(i = 0; i < hotspotTemplates['ht_products'].length; i++) {
				if (hotspotTemplates['ht_products'][i]._svg_14.logicBlock_scaling) {
					hotspotTemplates['ht_products'][i]._svg_14.logicBlock_scaling();
				}
				if (hotspotTemplates['ht_products'][i]._svg_14.logicBlock_angle) {
					hotspotTemplates['ht_products'][i]._svg_14.logicBlock_angle();
				}
			}
		}
	}
	me.callChildLogicBlocksHotspot_ht_example2_sizechanged = function(){
		if(hotspotTemplates['ht_example2']) {
			var i;
			for(i = 0; i < hotspotTemplates['ht_example2'].length; i++) {
				if (hotspotTemplates['ht_example2'][i]._green_walls0.logicBlock_scaling) {
					hotspotTemplates['ht_example2'][i]._green_walls0.logicBlock_scaling();
				}
			}
		}
	}
	me.callChildLogicBlocksHotspot_ht_example2_changenodeid = function(){
		if(hotspotTemplates['ht_example2']) {
			var i;
			for(i = 0; i < hotspotTemplates['ht_example2'].length; i++) {
				if (hotspotTemplates['ht_example2'][i]._rectangle_40.logicBlock_size) {
					hotspotTemplates['ht_example2'][i]._rectangle_40.logicBlock_size();
				}
				if (hotspotTemplates['ht_example2'][i]._rectangle_50.logicBlock_alpha) {
					hotspotTemplates['ht_example2'][i]._rectangle_50.logicBlock_alpha();
				}
				if (hotspotTemplates['ht_example2'][i]._rectangle_50.logicBlock_size) {
					hotspotTemplates['ht_example2'][i]._rectangle_50.logicBlock_size();
				}
				if (hotspotTemplates['ht_example2'][i]._svg_10.logicBlock_scaling) {
					hotspotTemplates['ht_example2'][i]._svg_10.logicBlock_scaling();
				}
				if (hotspotTemplates['ht_example2'][i]._svg_10.logicBlock_angle) {
					hotspotTemplates['ht_example2'][i]._svg_10.logicBlock_angle();
				}
				if (hotspotTemplates['ht_example2'][i]._more_info0.logicBlock_alpha) {
					hotspotTemplates['ht_example2'][i]._more_info0.logicBlock_alpha();
				}
				if (hotspotTemplates['ht_example2'][i]._more_info0.logicBlock_position) {
					hotspotTemplates['ht_example2'][i]._more_info0.logicBlock_position();
				}
				if (hotspotTemplates['ht_example2'][i]._close0.logicBlock_alpha) {
					hotspotTemplates['ht_example2'][i]._close0.logicBlock_alpha();
				}
				if (hotspotTemplates['ht_example2'][i]._close0.logicBlock_position) {
					hotspotTemplates['ht_example2'][i]._close0.logicBlock_position();
				}
			}
		}
	}
	me.callChildLogicBlocksHotspot_ht_example2_varchanged_info = function(){
		if(hotspotTemplates['ht_example2']) {
			var i;
			for(i = 0; i < hotspotTemplates['ht_example2'].length; i++) {
				if (hotspotTemplates['ht_example2'][i]._rectangle_40.logicBlock_size) {
					hotspotTemplates['ht_example2'][i]._rectangle_40.logicBlock_size();
				}
				if (hotspotTemplates['ht_example2'][i]._rectangle_50.logicBlock_alpha) {
					hotspotTemplates['ht_example2'][i]._rectangle_50.logicBlock_alpha();
				}
				if (hotspotTemplates['ht_example2'][i]._rectangle_50.logicBlock_size) {
					hotspotTemplates['ht_example2'][i]._rectangle_50.logicBlock_size();
				}
				if (hotspotTemplates['ht_example2'][i]._svg_10.logicBlock_scaling) {
					hotspotTemplates['ht_example2'][i]._svg_10.logicBlock_scaling();
				}
				if (hotspotTemplates['ht_example2'][i]._svg_10.logicBlock_angle) {
					hotspotTemplates['ht_example2'][i]._svg_10.logicBlock_angle();
				}
				if (hotspotTemplates['ht_example2'][i]._more_info0.logicBlock_alpha) {
					hotspotTemplates['ht_example2'][i]._more_info0.logicBlock_alpha();
				}
				if (hotspotTemplates['ht_example2'][i]._more_info0.logicBlock_position) {
					hotspotTemplates['ht_example2'][i]._more_info0.logicBlock_position();
				}
				if (hotspotTemplates['ht_example2'][i]._close0.logicBlock_alpha) {
					hotspotTemplates['ht_example2'][i]._close0.logicBlock_alpha();
				}
				if (hotspotTemplates['ht_example2'][i]._close0.logicBlock_position) {
					hotspotTemplates['ht_example2'][i]._close0.logicBlock_position();
				}
			}
		}
	}
	me.callChildLogicBlocksHotspot_ht_example3_sizechanged = function(){
		if(hotspotTemplates['ht_example3']) {
			var i;
			for(i = 0; i < hotspotTemplates['ht_example3'].length; i++) {
				if (hotspotTemplates['ht_example3'][i]._green_walls.logicBlock_scaling) {
					hotspotTemplates['ht_example3'][i]._green_walls.logicBlock_scaling();
				}
			}
		}
	}
	me.callChildLogicBlocksHotspot_ht_example3_changenodeid = function(){
		if(hotspotTemplates['ht_example3']) {
			var i;
			for(i = 0; i < hotspotTemplates['ht_example3'].length; i++) {
				if (hotspotTemplates['ht_example3'][i]._rectangle_4.logicBlock_size) {
					hotspotTemplates['ht_example3'][i]._rectangle_4.logicBlock_size();
				}
				if (hotspotTemplates['ht_example3'][i]._rectangle_5.logicBlock_alpha) {
					hotspotTemplates['ht_example3'][i]._rectangle_5.logicBlock_alpha();
				}
				if (hotspotTemplates['ht_example3'][i]._rectangle_5.logicBlock_size) {
					hotspotTemplates['ht_example3'][i]._rectangle_5.logicBlock_size();
				}
				if (hotspotTemplates['ht_example3'][i]._svg_1.logicBlock_scaling) {
					hotspotTemplates['ht_example3'][i]._svg_1.logicBlock_scaling();
				}
				if (hotspotTemplates['ht_example3'][i]._svg_1.logicBlock_angle) {
					hotspotTemplates['ht_example3'][i]._svg_1.logicBlock_angle();
				}
				if (hotspotTemplates['ht_example3'][i]._more_info.logicBlock_alpha) {
					hotspotTemplates['ht_example3'][i]._more_info.logicBlock_alpha();
				}
				if (hotspotTemplates['ht_example3'][i]._more_info.logicBlock_position) {
					hotspotTemplates['ht_example3'][i]._more_info.logicBlock_position();
				}
				if (hotspotTemplates['ht_example3'][i]._close.logicBlock_alpha) {
					hotspotTemplates['ht_example3'][i]._close.logicBlock_alpha();
				}
				if (hotspotTemplates['ht_example3'][i]._close.logicBlock_position) {
					hotspotTemplates['ht_example3'][i]._close.logicBlock_position();
				}
			}
		}
	}
	me.callChildLogicBlocksHotspot_ht_example3_varchanged_info = function(){
		if(hotspotTemplates['ht_example3']) {
			var i;
			for(i = 0; i < hotspotTemplates['ht_example3'].length; i++) {
				if (hotspotTemplates['ht_example3'][i]._rectangle_4.logicBlock_size) {
					hotspotTemplates['ht_example3'][i]._rectangle_4.logicBlock_size();
				}
				if (hotspotTemplates['ht_example3'][i]._rectangle_5.logicBlock_alpha) {
					hotspotTemplates['ht_example3'][i]._rectangle_5.logicBlock_alpha();
				}
				if (hotspotTemplates['ht_example3'][i]._rectangle_5.logicBlock_size) {
					hotspotTemplates['ht_example3'][i]._rectangle_5.logicBlock_size();
				}
				if (hotspotTemplates['ht_example3'][i]._svg_1.logicBlock_scaling) {
					hotspotTemplates['ht_example3'][i]._svg_1.logicBlock_scaling();
				}
				if (hotspotTemplates['ht_example3'][i]._svg_1.logicBlock_angle) {
					hotspotTemplates['ht_example3'][i]._svg_1.logicBlock_angle();
				}
				if (hotspotTemplates['ht_example3'][i]._more_info.logicBlock_alpha) {
					hotspotTemplates['ht_example3'][i]._more_info.logicBlock_alpha();
				}
				if (hotspotTemplates['ht_example3'][i]._more_info.logicBlock_position) {
					hotspotTemplates['ht_example3'][i]._more_info.logicBlock_position();
				}
				if (hotspotTemplates['ht_example3'][i]._close.logicBlock_alpha) {
					hotspotTemplates['ht_example3'][i]._close.logicBlock_alpha();
				}
				if (hotspotTemplates['ht_example3'][i]._close.logicBlock_position) {
					hotspotTemplates['ht_example3'][i]._close.logicBlock_position();
				}
			}
		}
	}
	this.player.addListener('changenodeid', function() {
		me.ggUserdata=me.player.userdata;
	});
	this.skinTimerEvent=function() {
		me.ggCurrentTime=new Date().getTime();
		me._timer_1.ggTimestamp=me.player.getLastActivity();
		if (me._timer_1.ggLastIsActive!=me._timer_1.ggIsActive()) {
			me._timer_1.ggLastIsActive=me._timer_1.ggIsActive();
			if (me._timer_1.ggLastIsActive) {
				me.player.setVariableValue('tempor', true);
			} else {
				me.player.setVariableValue('tempor', false);
			}
		}
		me._timer_1.ggUpdateConditionTimer();
		if (me.elementMouseOver['rectangle_2']) {
			me.player.setVariableValue('botcirc', true);
		}
	};
	this.player.addListener('timer', this.skinTimerEvent);
	function SkinHotspotClass_ht_text1(skinObj,hotspot) {
		var me=this;
		var flag=false;
		var hs='';
		this.player=skinObj.player;
		this.skin=skinObj;
		this.hotspot=hotspot;
		var nodeId=String(hotspot.url);
		nodeId=(nodeId.charAt(0)=='{')?nodeId.substr(1, nodeId.length - 2):'';
		this.ggUserdata=this.skin.player.getNodeUserdata(nodeId);
		this.elementMouseDown=[];
		this.elementMouseOver=[];
		this.findElements=function(id,regex) {
			return me.skin.findElements(id,regex);
		}
		this._ht_text1=document.createElement('div');
		this._ht_text1.ggId="ht_text1";
		this._ht_text1.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1 };
		this._ht_text1.ggVisible=true;
		this._ht_text1.className="ggskin ggskin_hotspot ";
		this._ht_text1.ggType='hotspot';
		hs ='';
		hs+='height : 5px;';
		hs+='left : 280px;';
		hs+='position : absolute;';
		hs+='top : 179px;';
		hs+='visibility : inherit;';
		hs+='width : 5px;';
		hs+='pointer-events:auto;';
		this._ht_text1.setAttribute('style',hs);
		this._ht_text1.style[domTransform + 'Origin']='50% 50%';
		me._ht_text1.ggIsActive=function() {
			return me.player.getCurrentNode()==this.ggElementNodeId();
		}
		me._ht_text1.ggElementNodeId=function() {
			return me.hotspot.url.substr(1, me.hotspot.url.length - 2);
		}
		this._ht_text1.onclick=function (e) {
			me.skin.hotspotProxyClick(me.hotspot.id);
		}
		this._ht_text1.ondblclick=function (e) {
			me.skin.hotspotProxyDoubleClick(me.hotspot.id);
		}
		this._ht_text1.onmouseover=function (e) {
			me.player.setActiveHotspot(me.hotspot);
			me.skin.hotspotProxyOver(me.hotspot.id);
		}
		this._ht_text1.onmouseout=function (e) {
			me.player.setActiveHotspot(null);
			me.skin.hotspotProxyOut(me.hotspot.id);
		}
		this._ht_text1.ggUpdatePosition=function (useTransition) {
		}
		this._text_1=document.createElement('div');
		this._text_1__text=document.createElement('div');
		this._text_1.className='ggskin ggskin_textdiv';
		this._text_1.ggTextDiv=this._text_1__text;
		this._text_1.ggId="Text 1";
		this._text_1.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1 };
		this._text_1.ggVisible=true;
		this._text_1.className="ggskin ggskin_text ";
		this._text_1.ggType='text';
		hs ='';
		hs+='height : 111px;';
		hs+='left : -58px;';
		hs+='position : absolute;';
		hs+='top : -7px;';
		hs+='visibility : inherit;';
		hs+='width : 369px;';
		hs+='pointer-events:auto;';
		hs+='text-shadow: 2px 2px 2px rgba(68,68,68,0.6);';
		this._text_1.setAttribute('style',hs);
		this._text_1.style[domTransform + 'Origin']='50% 50%';
		hs ='position:absolute;';
		hs+='cursor: default;';
		hs+='left: 0px;';
		hs+='top:  0px;';
		hs+='width: 369px;';
		hs+='height: auto;';
		hs+='border: 0px solid #000000;';
		hs+='color: rgba(255,255,255,1);';
		hs+='text-align: left;';
		hs+='white-space: pre-wrap;';
		hs+='padding: 0px 1px 0px 1px;';
		hs+='overflow: hidden;';
		this._text_1__text.setAttribute('style',hs);
		this._text_1__text.innerHTML="<b>THIS IS AN EXAMPLE<\/b><br\/>OF A DESCRIPTIVE TEXT MODULE";
		this._text_1.appendChild(this._text_1__text);
		me._text_1.ggIsActive=function() {
			if ((this.parentNode) && (this.parentNode.ggIsActive)) {
				return this.parentNode.ggIsActive();
			}
			return false;
		}
		me._text_1.ggElementNodeId=function() {
			if ((this.parentNode) && (this.parentNode.ggElementNodeId)) {
				return this.parentNode.ggElementNodeId();
			}
			return me.ggNodeId;
		}
		this._text_1.ggUpdatePosition=function (useTransition) {
		}
		this._ht_text1.appendChild(this._text_1);
		this.__div = this._ht_text1;
	};
	function SkinHotspotClass_ht_walls(skinObj,hotspot) {
		var me=this;
		var flag=false;
		var hs='';
		this.player=skinObj.player;
		this.skin=skinObj;
		this.hotspot=hotspot;
		var nodeId=String(hotspot.url);
		nodeId=(nodeId.charAt(0)=='{')?nodeId.substr(1, nodeId.length - 2):'';
		this.ggUserdata=this.skin.player.getNodeUserdata(nodeId);
		this.elementMouseDown=[];
		this.elementMouseOver=[];
		this.findElements=function(id,regex) {
			return me.skin.findElements(id,regex);
		}
		this._ht_walls=document.createElement('div');
		this._ht_walls.ggId="ht_walls";
		this._ht_walls.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1 };
		this._ht_walls.ggVisible=true;
		this._ht_walls.className="ggskin ggskin_hotspot ";
		this._ht_walls.ggType='hotspot';
		hs ='';
		hs+='height : 5px;';
		hs+='left : 30px;';
		hs+='position : absolute;';
		hs+='top : 102px;';
		hs+='visibility : inherit;';
		hs+='width : 5px;';
		hs+='pointer-events:auto;';
		this._ht_walls.setAttribute('style',hs);
		this._ht_walls.style[domTransform + 'Origin']='50% 50%';
		me._ht_walls.ggIsActive=function() {
			return me.player.getCurrentNode()==this.ggElementNodeId();
		}
		me._ht_walls.ggElementNodeId=function() {
			return me.hotspot.url.substr(1, me.hotspot.url.length - 2);
		}
		me._ht_walls.logicBlock_scaling = function() {
			var newLogicStateScaling;
			if (
				(me.player.getViewerSize().width < 720)
			)
			{
				newLogicStateScaling = 0;
			}
			else {
				newLogicStateScaling = -1;
			}
			if (me._ht_walls.ggCurrentLogicStateScaling != newLogicStateScaling) {
				me._ht_walls.ggCurrentLogicStateScaling = newLogicStateScaling;
				me._ht_walls.style[domTransition]='' + cssPrefix + 'transform 1000ms ease 0ms';
				if (me._ht_walls.ggCurrentLogicStateScaling == 0) {
					me._ht_walls.ggParameter.sx = 0.7;
					me._ht_walls.ggParameter.sy = 0.7;
					me._ht_walls.style[domTransform]=parameterToTransform(me._ht_walls.ggParameter);
				}
				else {
					me._ht_walls.ggParameter.sx = 1;
					me._ht_walls.ggParameter.sy = 1;
					me._ht_walls.style[domTransform]=parameterToTransform(me._ht_walls.ggParameter);
				}
			}
		}
		this._ht_walls.onclick=function (e) {
			me.skin.hotspotProxyClick(me.hotspot.id);
		}
		this._ht_walls.ondblclick=function (e) {
			me.skin.hotspotProxyDoubleClick(me.hotspot.id);
		}
		this._ht_walls.onmouseover=function (e) {
			me.player.setActiveHotspot(me.hotspot);
			me.skin.hotspotProxyOver(me.hotspot.id);
		}
		this._ht_walls.onmouseout=function (e) {
			me.player.setActiveHotspot(null);
			me.skin.hotspotProxyOut(me.hotspot.id);
		}
		this._ht_walls.ggUpdatePosition=function (useTransition) {
		}
		this._green_walls6=document.createElement('div');
		this._green_walls6.ggId="Green walls";
		this._green_walls6.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1 };
		this._green_walls6.ggVisible=true;
		this._green_walls6.className="ggskin ggskin_container ";
		this._green_walls6.ggType='container';
		hs ='';
		hs+='height : 294px;';
		hs+='left : -15px;';
		hs+='position : absolute;';
		hs+='top : -3px;';
		hs+='visibility : inherit;';
		hs+='width : 387px;';
		hs+='pointer-events:none;';
		this._green_walls6.setAttribute('style',hs);
		this._green_walls6.style[domTransform + 'Origin']='50% 50%';
		me._green_walls6.ggIsActive=function() {
			if ((this.parentNode) && (this.parentNode.ggIsActive)) {
				return this.parentNode.ggIsActive();
			}
			return false;
		}
		me._green_walls6.ggElementNodeId=function() {
			if ((this.parentNode) && (this.parentNode.ggElementNodeId)) {
				return this.parentNode.ggElementNodeId();
			}
			return me.ggNodeId;
		}
		this._green_walls6.ggUpdatePosition=function (useTransition) {
		}
		this._rectangle_43=document.createElement('div');
		this._rectangle_43.ggId="Rectangle 4";
		this._rectangle_43.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1 };
		this._rectangle_43.ggVisible=true;
		this._rectangle_43.className="ggskin ggskin_rectangle ";
		this._rectangle_43.ggType='rectangle';
		hs ='';
		hs+='background : #ffffff;';
		hs+='border : 0px solid #000000;';
		hs+='cursor : default;';
		hs+='height : 250px;';
		hs+='left : 35px;';
		hs+='position : absolute;';
		hs+='top : 59px;';
		hs+='visibility : inherit;';
		hs+='width : 3px;';
		hs+='pointer-events:auto;';
		this._rectangle_43.setAttribute('style',hs);
		this._rectangle_43.style[domTransform + 'Origin']='50% 50%';
		me._rectangle_43.ggIsActive=function() {
			if ((this.parentNode) && (this.parentNode.ggIsActive)) {
				return this.parentNode.ggIsActive();
			}
			return false;
		}
		me._rectangle_43.ggElementNodeId=function() {
			if ((this.parentNode) && (this.parentNode.ggElementNodeId)) {
				return this.parentNode.ggElementNodeId();
			}
			return me.ggNodeId;
		}
		me._rectangle_43.logicBlock_size = function() {
			var newLogicStateSize;
			if (
				(me.player.getVariableValue('info') == true)
			)
			{
				newLogicStateSize = 0;
			}
			else if (
				(me.player.getVariableValue('info') == false)
			)
			{
				newLogicStateSize = 1;
			}
			else {
				newLogicStateSize = -1;
			}
			if (me._rectangle_43.ggCurrentLogicStateSize != newLogicStateSize) {
				me._rectangle_43.ggCurrentLogicStateSize = newLogicStateSize;
				me._rectangle_43.style[domTransition]='width 500ms ease 0ms, height 500ms ease 0ms';
				if (me._rectangle_43.ggCurrentLogicStateSize == 0) {
					me._rectangle_43.style.width='3px';
					me._rectangle_43.style.height='260px';
					me.skin.updateSize(me._rectangle_43);
				}
				else if (me._rectangle_43.ggCurrentLogicStateSize == 1) {
					me._rectangle_43.style.width='3px';
					me._rectangle_43.style.height='3px';
					me.skin.updateSize(me._rectangle_43);
				}
				else {
					me._rectangle_43.style.width='3px';
					me._rectangle_43.style.height='250px';
					me.skin.updateSize(me._rectangle_43);
				}
			}
		}
		this._rectangle_43.ggUpdatePosition=function (useTransition) {
		}
		this._green_walls6.appendChild(this._rectangle_43);
		this._rectangle_53=document.createElement('div');
		this._rectangle_53.ggId="Rectangle 5";
		this._rectangle_53.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1 };
		this._rectangle_53.ggVisible=true;
		this._rectangle_53.className="ggskin ggskin_rectangle ";
		this._rectangle_53.ggType='rectangle';
		hs ='';
		hs+='background : rgba(255,255,255,0.745098);';
		hs+='border : 0px solid #000000;';
		hs+='cursor : pointer;';
		hs+='height : 1px;';
		hs+='left : 42px;';
		hs+='opacity : 0;';
		hs+='position : absolute;';
		hs+='top : 60px;';
		hs+='visibility : hidden;';
		hs+='width : 1px;';
		hs+='pointer-events:auto;';
		this._rectangle_53.setAttribute('style',hs);
		this._rectangle_53.style[domTransform + 'Origin']='50% 50%';
		me._rectangle_53.ggIsActive=function() {
			if ((this.parentNode) && (this.parentNode.ggIsActive)) {
				return this.parentNode.ggIsActive();
			}
			return false;
		}
		me._rectangle_53.ggElementNodeId=function() {
			if ((this.parentNode) && (this.parentNode.ggElementNodeId)) {
				return this.parentNode.ggElementNodeId();
			}
			return me.ggNodeId;
		}
		me._rectangle_53.logicBlock_size = function() {
			var newLogicStateSize;
			if (
				(me.player.getVariableValue('info') == true)
			)
			{
				newLogicStateSize = 0;
			}
			else {
				newLogicStateSize = -1;
			}
			if (me._rectangle_53.ggCurrentLogicStateSize != newLogicStateSize) {
				me._rectangle_53.ggCurrentLogicStateSize = newLogicStateSize;
				me._rectangle_53.style[domTransition]='width 500ms ease 0ms, height 500ms ease 0ms, opacity 500ms ease 0ms, visibility 500ms ease 0ms';
				if (me._rectangle_53.ggCurrentLogicStateSize == 0) {
					me._rectangle_53.style.width='350px';
					me._rectangle_53.style.height='270px';
					me.skin.updateSize(me._rectangle_53);
				}
				else {
					me._rectangle_53.style.width='1px';
					me._rectangle_53.style.height='1px';
					me.skin.updateSize(me._rectangle_53);
				}
			}
		}
		me._rectangle_53.logicBlock_alpha = function() {
			var newLogicStateAlpha;
			if (
				(me.player.getVariableValue('info') == true)
			)
			{
				newLogicStateAlpha = 0;
			}
			else {
				newLogicStateAlpha = -1;
			}
			if (me._rectangle_53.ggCurrentLogicStateAlpha != newLogicStateAlpha) {
				me._rectangle_53.ggCurrentLogicStateAlpha = newLogicStateAlpha;
				me._rectangle_53.style[domTransition]='width 500ms ease 0ms, height 500ms ease 0ms, opacity 500ms ease 0ms, visibility 500ms ease 0ms';
				if (me._rectangle_53.ggCurrentLogicStateAlpha == 0) {
					me._rectangle_53.style.visibility=me._rectangle_53.ggVisible?'inherit':'hidden';
					me._rectangle_53.style.opacity=1;
				}
				else {
					me._rectangle_53.style.visibility="hidden";
					me._rectangle_53.style.opacity=0;
				}
			}
		}
		this._rectangle_53.onclick=function (e) {
			me.player.setVariableValue('info', !me.player.getVariableValue('info'));
		}
		this._rectangle_53.ggUpdatePosition=function (useTransition) {
		}
		this._text_23=document.createElement('div');
		this._text_23__text=document.createElement('div');
		this._text_23.className='ggskin ggskin_textdiv';
		this._text_23.ggTextDiv=this._text_23__text;
		this._text_23.ggId="Text 2";
		this._text_23.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1 };
		this._text_23.ggVisible=true;
		this._text_23.className="ggskin ggskin_text ";
		this._text_23.ggType='text';
		hs ='';
		hs+='cursor : pointer;';
		hs+='height : 250px;';
		hs+='left : 21px;';
		hs+='position : absolute;';
		hs+='top : 8px;';
		hs+='visibility : inherit;';
		hs+='width : 300px;';
		hs+='pointer-events:auto;';
		hs+='font-size: 17px';
		this._text_23.setAttribute('style',hs);
		this._text_23.style[domTransform + 'Origin']='50% 50%';
		hs ='position:absolute;';
		hs+='left: 0px;';
		hs+='top:  0px;';
		hs+='width: 300px;';
		hs+='height: 250px;';
		hs+='border: 0px solid #000000;';
		hs+='color: rgba(57,57,57,1);';
		hs+='text-align: left;';
		hs+='white-space: pre-wrap;';
		hs+='padding: 0px 1px 0px 1px;';
		hs+='overflow: hidden;';
		hs+='overflow-y: auto;';
		this._text_23__text.setAttribute('style',hs);
		this._text_23__text.innerHTML="Transform both your interior and exterior into a spectacular nature backdrop<br\/><br\/>-The Symbiotik Walls system is a one-piece hydroponic system with automated irrigation that can be built in open-loop or recirculation system <br\/>-Both for Interior and exterior  <br\/><br\/>";
		this._text_23.appendChild(this._text_23__text);
		me._text_23.ggIsActive=function() {
			if ((this.parentNode) && (this.parentNode.ggIsActive)) {
				return this.parentNode.ggIsActive();
			}
			return false;
		}
		me._text_23.ggElementNodeId=function() {
			if ((this.parentNode) && (this.parentNode.ggElementNodeId)) {
				return this.parentNode.ggElementNodeId();
			}
			return me.ggNodeId;
		}
		this._text_23.ggUpdatePosition=function (useTransition) {
		}
		this._rectangle_53.appendChild(this._text_23);
		this._green_walls6.appendChild(this._rectangle_53);
		this._svg_18=document.createElement('div');
		this._svg_18__img=document.createElement('img');
		this._svg_18__img.className='ggskin ggskin_svg';
		this._svg_18__img.setAttribute('src',basePath + 'images/svg_18.svg');
		this._svg_18__img.setAttribute('style','position: absolute;top: 0px;left: 0px;width: 100%;height: 100%;-webkit-user-drag:none;pointer-events:none;;');
		this._svg_18__img['ondragstart']=function() { return false; };
		this._svg_18.appendChild(this._svg_18__img);
		this._svg_18.ggId="Svg 1";
		this._svg_18.ggParameter={ rx:0,ry:0,a:45,sx:1,sy:1 };
		this._svg_18.ggVisible=true;
		this._svg_18.className="ggskin ggskin_svg ";
		this._svg_18.ggType='svg';
		hs ='';
		hs+='cursor : pointer;';
		hs+='height : 30px;';
		hs+='left : 22px;';
		hs+='position : absolute;';
		hs+='top : 31px;';
		hs+='visibility : inherit;';
		hs+='width : 30px;';
		hs+='pointer-events:auto;';
		this._svg_18.setAttribute('style',hs);
		this._svg_18.style[domTransform + 'Origin']='50% 50%';
		this._svg_18.style[domTransform]=parameterToTransform(this._svg_18.ggParameter);
		me._svg_18.ggIsActive=function() {
			if ((this.parentNode) && (this.parentNode.ggIsActive)) {
				return this.parentNode.ggIsActive();
			}
			return false;
		}
		me._svg_18.ggElementNodeId=function() {
			if ((this.parentNode) && (this.parentNode.ggElementNodeId)) {
				return this.parentNode.ggElementNodeId();
			}
			return me.ggNodeId;
		}
		me._svg_18.logicBlock_scaling = function() {
			var newLogicStateScaling;
			if (
				(me.player.getVariableValue('info') == true)
			)
			{
				newLogicStateScaling = 0;
			}
			else {
				newLogicStateScaling = -1;
			}
			if (me._svg_18.ggCurrentLogicStateScaling != newLogicStateScaling) {
				me._svg_18.ggCurrentLogicStateScaling = newLogicStateScaling;
				me._svg_18.style[domTransition]='' + cssPrefix + 'transform 500ms ease 0ms, ' + cssPrefix + 'transform 500ms ease 0ms';
				if (me._svg_18.ggCurrentLogicStateScaling == 0) {
					me._svg_18.ggParameter.sx = 0.8;
					me._svg_18.ggParameter.sy = 0.8;
					me._svg_18.style[domTransform]=parameterToTransform(me._svg_18.ggParameter);
				}
				else {
					me._svg_18.ggParameter.sx = 1;
					me._svg_18.ggParameter.sy = 1;
					me._svg_18.style[domTransform]=parameterToTransform(me._svg_18.ggParameter);
				}
			}
		}
		me._svg_18.logicBlock_angle = function() {
			var newLogicStateAngle;
			if (
				(me.player.getVariableValue('info') == true)
			)
			{
				newLogicStateAngle = 0;
			}
			else {
				newLogicStateAngle = -1;
			}
			if (me._svg_18.ggCurrentLogicStateAngle != newLogicStateAngle) {
				me._svg_18.ggCurrentLogicStateAngle = newLogicStateAngle;
				me._svg_18.style[domTransition]='' + cssPrefix + 'transform 500ms ease 0ms, ' + cssPrefix + 'transform 500ms ease 0ms';
				if (me._svg_18.ggCurrentLogicStateAngle == 0) {
					me._svg_18.ggParameter.a = 0;
					me._svg_18.style[domTransform]=parameterToTransform(me._svg_18.ggParameter);
				}
				else {
					me._svg_18.ggParameter.a = 45;
					me._svg_18.style[domTransform]=parameterToTransform(me._svg_18.ggParameter);
				}
			}
		}
		this._svg_18.onclick=function (e) {
			me.player.setVariableValue('info', !me.player.getVariableValue('info'));
		}
		this._svg_18.ggUpdatePosition=function (useTransition) {
		}
		this._green_walls6.appendChild(this._svg_18);
		this._rectangle_93=document.createElement('div');
		this._rectangle_93.ggId="Rectangle 9";
		this._rectangle_93.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1 };
		this._rectangle_93.ggVisible=true;
		this._rectangle_93.className="ggskin ggskin_rectangle ";
		this._rectangle_93.ggType='rectangle';
		hs ='';
		hs+='background : rgba(0,0,0,0.313725);';
		hs+='border : 0px solid #000000;';
		hs+='cursor : pointer;';
		hs+='height : 25px;';
		hs+='left : 58px;';
		hs+='position : absolute;';
		hs+='top : 33px;';
		hs+='visibility : inherit;';
		hs+='width : 179px;';
		hs+='pointer-events:auto;';
		this._rectangle_93.setAttribute('style',hs);
		this._rectangle_93.style[domTransform + 'Origin']='50% 50%';
		me._rectangle_93.ggIsActive=function() {
			if ((this.parentNode) && (this.parentNode.ggIsActive)) {
				return this.parentNode.ggIsActive();
			}
			return false;
		}
		me._rectangle_93.ggElementNodeId=function() {
			if ((this.parentNode) && (this.parentNode.ggElementNodeId)) {
				return this.parentNode.ggElementNodeId();
			}
			return me.ggNodeId;
		}
		this._rectangle_93.onclick=function (e) {
			me.player.setVariableValue('info', !me.player.getVariableValue('info'));
		}
		this._rectangle_93.ggUpdatePosition=function (useTransition) {
		}
		this._green_walls6.appendChild(this._rectangle_93);
		this._more_info5=document.createElement('div');
		this._more_info5__text=document.createElement('div');
		this._more_info5.className='ggskin ggskin_textdiv';
		this._more_info5.ggTextDiv=this._more_info5__text;
		this._more_info5.ggId="more info";
		this._more_info5.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1 };
		this._more_info5.ggVisible=true;
		this._more_info5.className="ggskin ggskin_text ";
		this._more_info5.ggType='text';
		hs ='';
		hs+='cursor : pointer;';
		hs+='height : 25px;';
		hs+='left : 59px;';
		hs+='position : absolute;';
		hs+='top : 34px;';
		hs+='visibility : inherit;';
		hs+='width : 178px;';
		hs+='pointer-events:auto;';
		hs+='font-size: 18px; font-family: Visby; font-weight: regular;';
		this._more_info5.setAttribute('style',hs);
		this._more_info5.style[domTransform + 'Origin']='50% 50%';
		hs ='position:absolute;';
		hs+='left: 0px;';
		hs+='top:  0px;';
		hs+='width: auto;';
		hs+='height: auto;';
		hs+='background: #000000;';
		hs+='background: rgba(0,0,0,0.117647);';
		hs+='border: 0px solid #000000;';
		hs+='color: rgba(255,255,255,1);';
		hs+='text-align: left;';
		hs+='white-space: nowrap;';
		hs+='padding: 0px 1px 0px 1px;';
		hs+='overflow: hidden;';
		this._more_info5__text.setAttribute('style',hs);
		this._more_info5__text.innerHTML="MORE INFO";
		this._more_info5.appendChild(this._more_info5__text);
		me._more_info5.ggIsActive=function() {
			if ((this.parentNode) && (this.parentNode.ggIsActive)) {
				return this.parentNode.ggIsActive();
			}
			return false;
		}
		me._more_info5.ggElementNodeId=function() {
			if ((this.parentNode) && (this.parentNode.ggElementNodeId)) {
				return this.parentNode.ggElementNodeId();
			}
			return me.ggNodeId;
		}
		me._more_info5.logicBlock_position = function() {
			var newLogicStatePosition;
			if (
				(me.player.getVariableValue('info') == true)
			)
			{
				newLogicStatePosition = 0;
			}
			else {
				newLogicStatePosition = -1;
			}
			if (me._more_info5.ggCurrentLogicStatePosition != newLogicStatePosition) {
				me._more_info5.ggCurrentLogicStatePosition = newLogicStatePosition;
				me._more_info5.style[domTransition]='left 500ms ease 0ms, top 500ms ease 0ms, opacity 500ms ease 0ms, visibility 500ms ease 0ms';
				if (me._more_info5.ggCurrentLogicStatePosition == 0) {
					me._more_info5.style.left='15px';
					me._more_info5.style.top='34px';
				}
				else {
					me._more_info5.style.left='59px';
					me._more_info5.style.top='34px';
				}
			}
		}
		me._more_info5.logicBlock_alpha = function() {
			var newLogicStateAlpha;
			if (
				(me.player.getVariableValue('info') == true)
			)
			{
				newLogicStateAlpha = 0;
			}
			else {
				newLogicStateAlpha = -1;
			}
			if (me._more_info5.ggCurrentLogicStateAlpha != newLogicStateAlpha) {
				me._more_info5.ggCurrentLogicStateAlpha = newLogicStateAlpha;
				me._more_info5.style[domTransition]='left 500ms ease 0ms, top 500ms ease 0ms, opacity 500ms ease 0ms, visibility 500ms ease 0ms';
				if (me._more_info5.ggCurrentLogicStateAlpha == 0) {
					me._more_info5.style.visibility="hidden";
					me._more_info5.style.opacity=0;
				}
				else {
					me._more_info5.style.visibility=me._more_info5.ggVisible?'inherit':'hidden';
					me._more_info5.style.opacity=1;
				}
			}
		}
		this._more_info5.onclick=function (e) {
			me.player.setVariableValue('info', !me.player.getVariableValue('info'));
		}
		this._more_info5.ggUpdatePosition=function (useTransition) {
		}
		this._green_walls6.appendChild(this._more_info5);
		this._close3=document.createElement('div');
		this._close3__text=document.createElement('div');
		this._close3.className='ggskin ggskin_textdiv';
		this._close3.ggTextDiv=this._close3__text;
		this._close3.ggId="close";
		this._close3.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1 };
		this._close3.ggVisible=true;
		this._close3.className="ggskin ggskin_text ";
		this._close3.ggType='text';
		hs ='';
		hs+='cursor : pointer;';
		hs+='height : 25px;';
		hs+='left : 59px;';
		hs+='position : absolute;';
		hs+='top : 34px;';
		hs+='visibility : inherit;';
		hs+='width : 178px;';
		hs+='pointer-events:auto;';
		hs+='font-size: 18px; font-family: Lane; font-weight: 100;';
		this._close3.setAttribute('style',hs);
		this._close3.style[domTransform + 'Origin']='50% 50%';
		hs ='position:absolute;';
		hs+='left: 0px;';
		hs+='top:  0px;';
		hs+='width: auto;';
		hs+='height: auto;';
		hs+='background: #000000;';
		hs+='background: rgba(0,0,0,0.117647);';
		hs+='border: 0px solid #000000;';
		hs+='color: rgba(255,255,255,1);';
		hs+='text-align: left;';
		hs+='white-space: nowrap;';
		hs+='padding: 0px 1px 0px 1px;';
		hs+='overflow: hidden;';
		this._close3__text.setAttribute('style',hs);
		this._close3__text.innerHTML="CLOSE";
		this._close3.appendChild(this._close3__text);
		me._close3.ggIsActive=function() {
			if ((this.parentNode) && (this.parentNode.ggIsActive)) {
				return this.parentNode.ggIsActive();
			}
			return false;
		}
		me._close3.ggElementNodeId=function() {
			if ((this.parentNode) && (this.parentNode.ggElementNodeId)) {
				return this.parentNode.ggElementNodeId();
			}
			return me.ggNodeId;
		}
		me._close3.logicBlock_position = function() {
			var newLogicStatePosition;
			if (
				(me.player.getVariableValue('info') == false)
			)
			{
				newLogicStatePosition = 0;
			}
			else {
				newLogicStatePosition = -1;
			}
			if (me._close3.ggCurrentLogicStatePosition != newLogicStatePosition) {
				me._close3.ggCurrentLogicStatePosition = newLogicStatePosition;
				me._close3.style[domTransition]='left 500ms ease 0ms, top 500ms ease 0ms, opacity 500ms ease 0ms, visibility 500ms ease 0ms';
				if (me._close3.ggCurrentLogicStatePosition == 0) {
					me._close3.style.left='15px';
					me._close3.style.top='34px';
				}
				else {
					me._close3.style.left='59px';
					me._close3.style.top='34px';
				}
			}
		}
		me._close3.logicBlock_alpha = function() {
			var newLogicStateAlpha;
			if (
				(me.player.getVariableValue('info') == false)
			)
			{
				newLogicStateAlpha = 0;
			}
			else {
				newLogicStateAlpha = -1;
			}
			if (me._close3.ggCurrentLogicStateAlpha != newLogicStateAlpha) {
				me._close3.ggCurrentLogicStateAlpha = newLogicStateAlpha;
				me._close3.style[domTransition]='left 500ms ease 0ms, top 500ms ease 0ms, opacity 500ms ease 0ms, visibility 500ms ease 0ms';
				if (me._close3.ggCurrentLogicStateAlpha == 0) {
					me._close3.style.visibility="hidden";
					me._close3.style.opacity=0;
				}
				else {
					me._close3.style.visibility=me._close3.ggVisible?'inherit':'hidden';
					me._close3.style.opacity=1;
				}
			}
		}
		this._close3.onclick=function (e) {
			me.player.setVariableValue('info', !me.player.getVariableValue('info'));
		}
		this._close3.ggUpdatePosition=function (useTransition) {
		}
		this._green_walls6.appendChild(this._close3);
		this._image_70=document.createElement('div');
		this._image_70__img=document.createElement('img');
		this._image_70__img.className='ggskin ggskin_image';
		this._image_70__img.setAttribute('src',basePath + 'images/image_70.png');
		this._image_70__img.setAttribute('style','position: absolute;top: 0px;left: 0px;width: 100%;height: 100%;-webkit-user-drag:none;pointer-events:none;;');
		this._image_70__img.className='ggskin ggskin_image';
		this._image_70__img['ondragstart']=function() { return false; };
		me.player.checkLoaded.push(this._image_70__img);
		this._image_70.appendChild(this._image_70__img);
		this._image_70.ggId="Image 7";
		this._image_70.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1 };
		this._image_70.ggVisible=true;
		this._image_70.className="ggskin ggskin_image ";
		this._image_70.ggType='image';
		hs ='';
		hs+='height : 71px;';
		hs+='left : -20px;';
		hs+='position : absolute;';
		hs+='top : -26px;';
		hs+='visibility : inherit;';
		hs+='width : 363px;';
		hs+='pointer-events:auto;';
		this._image_70.setAttribute('style',hs);
		this._image_70.style[domTransform + 'Origin']='50% 50%';
		me._image_70.ggIsActive=function() {
			if ((this.parentNode) && (this.parentNode.ggIsActive)) {
				return this.parentNode.ggIsActive();
			}
			return false;
		}
		me._image_70.ggElementNodeId=function() {
			if ((this.parentNode) && (this.parentNode.ggElementNodeId)) {
				return this.parentNode.ggElementNodeId();
			}
			return me.ggNodeId;
		}
		this._image_70.ggUpdatePosition=function (useTransition) {
		}
		this._green_walls6.appendChild(this._image_70);
		this._ht_walls.appendChild(this._green_walls6);
		this.__div = this._ht_walls;
	};
	function SkinHotspotClass_ht_frames(skinObj,hotspot) {
		var me=this;
		var flag=false;
		var hs='';
		this.player=skinObj.player;
		this.skin=skinObj;
		this.hotspot=hotspot;
		var nodeId=String(hotspot.url);
		nodeId=(nodeId.charAt(0)=='{')?nodeId.substr(1, nodeId.length - 2):'';
		this.ggUserdata=this.skin.player.getNodeUserdata(nodeId);
		this.elementMouseDown=[];
		this.elementMouseOver=[];
		this.findElements=function(id,regex) {
			return me.skin.findElements(id,regex);
		}
		this._ht_frames=document.createElement('div');
		this._ht_frames.ggId="ht_frames";
		this._ht_frames.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1 };
		this._ht_frames.ggVisible=true;
		this._ht_frames.className="ggskin ggskin_hotspot ";
		this._ht_frames.ggType='hotspot';
		hs ='';
		hs+='height : 5px;';
		hs+='left : 30px;';
		hs+='position : absolute;';
		hs+='top : 102px;';
		hs+='visibility : inherit;';
		hs+='width : 5px;';
		hs+='pointer-events:auto;';
		this._ht_frames.setAttribute('style',hs);
		this._ht_frames.style[domTransform + 'Origin']='50% 50%';
		me._ht_frames.ggIsActive=function() {
			return me.player.getCurrentNode()==this.ggElementNodeId();
		}
		me._ht_frames.ggElementNodeId=function() {
			return me.hotspot.url.substr(1, me.hotspot.url.length - 2);
		}
		this._ht_frames.onclick=function (e) {
			me.skin.hotspotProxyClick(me.hotspot.id);
		}
		this._ht_frames.ondblclick=function (e) {
			me.skin.hotspotProxyDoubleClick(me.hotspot.id);
		}
		this._ht_frames.onmouseover=function (e) {
			me.player.setActiveHotspot(me.hotspot);
			me.skin.hotspotProxyOver(me.hotspot.id);
		}
		this._ht_frames.onmouseout=function (e) {
			me.player.setActiveHotspot(null);
			me.skin.hotspotProxyOut(me.hotspot.id);
		}
		this._ht_frames.ggUpdatePosition=function (useTransition) {
		}
		this._green_walls5=document.createElement('div');
		this._green_walls5.ggId="Green walls";
		this._green_walls5.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1 };
		this._green_walls5.ggVisible=true;
		this._green_walls5.className="ggskin ggskin_container ";
		this._green_walls5.ggType='container';
		hs ='';
		hs+='height : 294px;';
		hs+='left : -15px;';
		hs+='position : absolute;';
		hs+='top : -3px;';
		hs+='visibility : inherit;';
		hs+='width : 387px;';
		hs+='pointer-events:none;';
		this._green_walls5.setAttribute('style',hs);
		this._green_walls5.style[domTransform + 'Origin']='0% 0%';
		me._green_walls5.ggIsActive=function() {
			if ((this.parentNode) && (this.parentNode.ggIsActive)) {
				return this.parentNode.ggIsActive();
			}
			return false;
		}
		me._green_walls5.ggElementNodeId=function() {
			if ((this.parentNode) && (this.parentNode.ggElementNodeId)) {
				return this.parentNode.ggElementNodeId();
			}
			return me.ggNodeId;
		}
		me._green_walls5.logicBlock_scaling = function() {
			var newLogicStateScaling;
			if (
				(me.player.getViewerSize().width < 720)
			)
			{
				newLogicStateScaling = 0;
			}
			else {
				newLogicStateScaling = -1;
			}
			if (me._green_walls5.ggCurrentLogicStateScaling != newLogicStateScaling) {
				me._green_walls5.ggCurrentLogicStateScaling = newLogicStateScaling;
				me._green_walls5.style[domTransition]='' + cssPrefix + 'transform 1000ms ease 0ms';
				if (me._green_walls5.ggCurrentLogicStateScaling == 0) {
					me._green_walls5.ggParameter.sx = 0.7;
					me._green_walls5.ggParameter.sy = 0.7;
					me._green_walls5.style[domTransform]=parameterToTransform(me._green_walls5.ggParameter);
				}
				else {
					me._green_walls5.ggParameter.sx = 1;
					me._green_walls5.ggParameter.sy = 1;
					me._green_walls5.style[domTransform]=parameterToTransform(me._green_walls5.ggParameter);
				}
			}
		}
		this._green_walls5.ggUpdatePosition=function (useTransition) {
		}
		this._rectangle_42=document.createElement('div');
		this._rectangle_42.ggId="Rectangle 4";
		this._rectangle_42.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1 };
		this._rectangle_42.ggVisible=true;
		this._rectangle_42.className="ggskin ggskin_rectangle ";
		this._rectangle_42.ggType='rectangle';
		hs ='';
		hs+='background : #ffffff;';
		hs+='border : 0px solid #000000;';
		hs+='cursor : default;';
		hs+='height : 260px;';
		hs+='left : 35px;';
		hs+='position : absolute;';
		hs+='top : 59px;';
		hs+='visibility : inherit;';
		hs+='width : 3px;';
		hs+='pointer-events:auto;';
		this._rectangle_42.setAttribute('style',hs);
		this._rectangle_42.style[domTransform + 'Origin']='50% 50%';
		me._rectangle_42.ggIsActive=function() {
			if ((this.parentNode) && (this.parentNode.ggIsActive)) {
				return this.parentNode.ggIsActive();
			}
			return false;
		}
		me._rectangle_42.ggElementNodeId=function() {
			if ((this.parentNode) && (this.parentNode.ggElementNodeId)) {
				return this.parentNode.ggElementNodeId();
			}
			return me.ggNodeId;
		}
		me._rectangle_42.logicBlock_size = function() {
			var newLogicStateSize;
			if (
				(me.player.getVariableValue('info') == true)
			)
			{
				newLogicStateSize = 0;
			}
			else if (
				(me.player.getVariableValue('info') == false)
			)
			{
				newLogicStateSize = 1;
			}
			else {
				newLogicStateSize = -1;
			}
			if (me._rectangle_42.ggCurrentLogicStateSize != newLogicStateSize) {
				me._rectangle_42.ggCurrentLogicStateSize = newLogicStateSize;
				me._rectangle_42.style[domTransition]='width 500ms ease 0ms, height 500ms ease 0ms';
				if (me._rectangle_42.ggCurrentLogicStateSize == 0) {
					me._rectangle_42.style.width='3px';
					me._rectangle_42.style.height='260px';
					me.skin.updateSize(me._rectangle_42);
				}
				else if (me._rectangle_42.ggCurrentLogicStateSize == 1) {
					me._rectangle_42.style.width='3px';
					me._rectangle_42.style.height='3px';
					me.skin.updateSize(me._rectangle_42);
				}
				else {
					me._rectangle_42.style.width='3px';
					me._rectangle_42.style.height='260px';
					me.skin.updateSize(me._rectangle_42);
				}
			}
		}
		this._rectangle_42.ggUpdatePosition=function (useTransition) {
		}
		this._green_walls5.appendChild(this._rectangle_42);
		this._rectangle_52=document.createElement('div');
		this._rectangle_52.ggId="Rectangle 5";
		this._rectangle_52.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1 };
		this._rectangle_52.ggVisible=true;
		this._rectangle_52.className="ggskin ggskin_rectangle ";
		this._rectangle_52.ggType='rectangle';
		hs ='';
		hs+='background : rgba(255,255,255,0.745098);';
		hs+='border : 0px solid #000000;';
		hs+='cursor : pointer;';
		hs+='height : 1px;';
		hs+='left : 42px;';
		hs+='opacity : 0;';
		hs+='position : absolute;';
		hs+='top : 60px;';
		hs+='visibility : hidden;';
		hs+='width : 1px;';
		hs+='pointer-events:auto;';
		this._rectangle_52.setAttribute('style',hs);
		this._rectangle_52.style[domTransform + 'Origin']='50% 50%';
		me._rectangle_52.ggIsActive=function() {
			if ((this.parentNode) && (this.parentNode.ggIsActive)) {
				return this.parentNode.ggIsActive();
			}
			return false;
		}
		me._rectangle_52.ggElementNodeId=function() {
			if ((this.parentNode) && (this.parentNode.ggElementNodeId)) {
				return this.parentNode.ggElementNodeId();
			}
			return me.ggNodeId;
		}
		me._rectangle_52.logicBlock_size = function() {
			var newLogicStateSize;
			if (
				(me.player.getVariableValue('info') == true)
			)
			{
				newLogicStateSize = 0;
			}
			else {
				newLogicStateSize = -1;
			}
			if (me._rectangle_52.ggCurrentLogicStateSize != newLogicStateSize) {
				me._rectangle_52.ggCurrentLogicStateSize = newLogicStateSize;
				me._rectangle_52.style[domTransition]='width 500ms ease 0ms, height 500ms ease 0ms, opacity 500ms ease 0ms, visibility 500ms ease 0ms';
				if (me._rectangle_52.ggCurrentLogicStateSize == 0) {
					me._rectangle_52.style.width='350px';
					me._rectangle_52.style.height='270px';
					me.skin.updateSize(me._rectangle_52);
				}
				else {
					me._rectangle_52.style.width='1px';
					me._rectangle_52.style.height='1px';
					me.skin.updateSize(me._rectangle_52);
				}
			}
		}
		me._rectangle_52.logicBlock_alpha = function() {
			var newLogicStateAlpha;
			if (
				(me.player.getVariableValue('info') == true)
			)
			{
				newLogicStateAlpha = 0;
			}
			else {
				newLogicStateAlpha = -1;
			}
			if (me._rectangle_52.ggCurrentLogicStateAlpha != newLogicStateAlpha) {
				me._rectangle_52.ggCurrentLogicStateAlpha = newLogicStateAlpha;
				me._rectangle_52.style[domTransition]='width 500ms ease 0ms, height 500ms ease 0ms, opacity 500ms ease 0ms, visibility 500ms ease 0ms';
				if (me._rectangle_52.ggCurrentLogicStateAlpha == 0) {
					me._rectangle_52.style.visibility=me._rectangle_52.ggVisible?'inherit':'hidden';
					me._rectangle_52.style.opacity=1;
				}
				else {
					me._rectangle_52.style.visibility="hidden";
					me._rectangle_52.style.opacity=0;
				}
			}
		}
		this._rectangle_52.onclick=function (e) {
			me.player.setVariableValue('info', !me.player.getVariableValue('info'));
		}
		this._rectangle_52.ggUpdatePosition=function (useTransition) {
		}
		this._text_22=document.createElement('div');
		this._text_22__text=document.createElement('div');
		this._text_22.className='ggskin ggskin_textdiv';
		this._text_22.ggTextDiv=this._text_22__text;
		this._text_22.ggId="Text 2";
		this._text_22.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1 };
		this._text_22.ggVisible=true;
		this._text_22.className="ggskin ggskin_text ";
		this._text_22.ggType='text';
		hs ='';
		hs+='cursor : pointer;';
		hs+='height : 250px;';
		hs+='left : 21px;';
		hs+='position : absolute;';
		hs+='top : 9px;';
		hs+='visibility : inherit;';
		hs+='width : 300px;';
		hs+='pointer-events:auto;';
		hs+='font-size: 17px;';
		this._text_22.setAttribute('style',hs);
		this._text_22.style[domTransform + 'Origin']='50% 50%';
		hs ='position:absolute;';
		hs+='left: 0px;';
		hs+='top:  0px;';
		hs+='width: 300px;';
		hs+='height: 250px;';
		hs+='border: 0px solid #000000;';
		hs+='color: rgba(57,57,57,1);';
		hs+='text-align: left;';
		hs+='white-space: pre-wrap;';
		hs+='padding: 0px 1px 0px 1px;';
		hs+='overflow: hidden;';
		hs+='overflow-y: auto;';
		this._text_22__text.setAttribute('style',hs);
		this._text_22__text.innerHTML="Symbiotik Living Frame has all the beauty, elegance and attributes of a living wall. <br\/><br\/>-It can be customized to fit any setting, size and style and it's built with an automatic irrigation system. <br\/>-The stainless steel frame is also customizable to adapt to any style.  It can be painted and it may be lacquered, in wood, glass, or mosaic. ";
		this._text_22.appendChild(this._text_22__text);
		me._text_22.ggIsActive=function() {
			if ((this.parentNode) && (this.parentNode.ggIsActive)) {
				return this.parentNode.ggIsActive();
			}
			return false;
		}
		me._text_22.ggElementNodeId=function() {
			if ((this.parentNode) && (this.parentNode.ggElementNodeId)) {
				return this.parentNode.ggElementNodeId();
			}
			return me.ggNodeId;
		}
		this._text_22.ggUpdatePosition=function (useTransition) {
		}
		this._rectangle_52.appendChild(this._text_22);
		this._green_walls5.appendChild(this._rectangle_52);
		this._svg_17=document.createElement('div');
		this._svg_17__img=document.createElement('img');
		this._svg_17__img.className='ggskin ggskin_svg';
		this._svg_17__img.setAttribute('src',basePath + 'images/svg_17.svg');
		this._svg_17__img.setAttribute('style','position: absolute;top: 0px;left: 0px;width: 100%;height: 100%;-webkit-user-drag:none;pointer-events:none;;');
		this._svg_17__img['ondragstart']=function() { return false; };
		this._svg_17.appendChild(this._svg_17__img);
		this._svg_17.ggId="Svg 1";
		this._svg_17.ggParameter={ rx:0,ry:0,a:45,sx:1,sy:1 };
		this._svg_17.ggVisible=true;
		this._svg_17.className="ggskin ggskin_svg ";
		this._svg_17.ggType='svg';
		hs ='';
		hs+='cursor : pointer;';
		hs+='height : 30px;';
		hs+='left : 22px;';
		hs+='position : absolute;';
		hs+='top : 31px;';
		hs+='visibility : inherit;';
		hs+='width : 30px;';
		hs+='pointer-events:auto;';
		this._svg_17.setAttribute('style',hs);
		this._svg_17.style[domTransform + 'Origin']='50% 50%';
		this._svg_17.style[domTransform]=parameterToTransform(this._svg_17.ggParameter);
		me._svg_17.ggIsActive=function() {
			if ((this.parentNode) && (this.parentNode.ggIsActive)) {
				return this.parentNode.ggIsActive();
			}
			return false;
		}
		me._svg_17.ggElementNodeId=function() {
			if ((this.parentNode) && (this.parentNode.ggElementNodeId)) {
				return this.parentNode.ggElementNodeId();
			}
			return me.ggNodeId;
		}
		me._svg_17.logicBlock_scaling = function() {
			var newLogicStateScaling;
			if (
				(me.player.getVariableValue('info') == true)
			)
			{
				newLogicStateScaling = 0;
			}
			else {
				newLogicStateScaling = -1;
			}
			if (me._svg_17.ggCurrentLogicStateScaling != newLogicStateScaling) {
				me._svg_17.ggCurrentLogicStateScaling = newLogicStateScaling;
				me._svg_17.style[domTransition]='' + cssPrefix + 'transform 500ms ease 0ms, ' + cssPrefix + 'transform 500ms ease 0ms';
				if (me._svg_17.ggCurrentLogicStateScaling == 0) {
					me._svg_17.ggParameter.sx = 0.8;
					me._svg_17.ggParameter.sy = 0.8;
					me._svg_17.style[domTransform]=parameterToTransform(me._svg_17.ggParameter);
				}
				else {
					me._svg_17.ggParameter.sx = 1;
					me._svg_17.ggParameter.sy = 1;
					me._svg_17.style[domTransform]=parameterToTransform(me._svg_17.ggParameter);
				}
			}
		}
		me._svg_17.logicBlock_angle = function() {
			var newLogicStateAngle;
			if (
				(me.player.getVariableValue('info') == true)
			)
			{
				newLogicStateAngle = 0;
			}
			else {
				newLogicStateAngle = -1;
			}
			if (me._svg_17.ggCurrentLogicStateAngle != newLogicStateAngle) {
				me._svg_17.ggCurrentLogicStateAngle = newLogicStateAngle;
				me._svg_17.style[domTransition]='' + cssPrefix + 'transform 500ms ease 0ms, ' + cssPrefix + 'transform 500ms ease 0ms';
				if (me._svg_17.ggCurrentLogicStateAngle == 0) {
					me._svg_17.ggParameter.a = 0;
					me._svg_17.style[domTransform]=parameterToTransform(me._svg_17.ggParameter);
				}
				else {
					me._svg_17.ggParameter.a = 45;
					me._svg_17.style[domTransform]=parameterToTransform(me._svg_17.ggParameter);
				}
			}
		}
		this._svg_17.onclick=function (e) {
			me.player.setVariableValue('info', !me.player.getVariableValue('info'));
		}
		this._svg_17.ggUpdatePosition=function (useTransition) {
		}
		this._green_walls5.appendChild(this._svg_17);
		this._rectangle_92=document.createElement('div');
		this._rectangle_92.ggId="Rectangle 9";
		this._rectangle_92.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1 };
		this._rectangle_92.ggVisible=true;
		this._rectangle_92.className="ggskin ggskin_rectangle ";
		this._rectangle_92.ggType='rectangle';
		hs ='';
		hs+='background : rgba(0,0,0,0.313725);';
		hs+='border : 0px solid #000000;';
		hs+='cursor : pointer;';
		hs+='height : 25px;';
		hs+='left : 58px;';
		hs+='position : absolute;';
		hs+='top : 33px;';
		hs+='visibility : inherit;';
		hs+='width : 179px;';
		hs+='pointer-events:auto;';
		this._rectangle_92.setAttribute('style',hs);
		this._rectangle_92.style[domTransform + 'Origin']='50% 50%';
		me._rectangle_92.ggIsActive=function() {
			if ((this.parentNode) && (this.parentNode.ggIsActive)) {
				return this.parentNode.ggIsActive();
			}
			return false;
		}
		me._rectangle_92.ggElementNodeId=function() {
			if ((this.parentNode) && (this.parentNode.ggElementNodeId)) {
				return this.parentNode.ggElementNodeId();
			}
			return me.ggNodeId;
		}
		this._rectangle_92.onclick=function (e) {
			me.player.setVariableValue('info', !me.player.getVariableValue('info'));
		}
		this._rectangle_92.ggUpdatePosition=function (useTransition) {
		}
		this._green_walls5.appendChild(this._rectangle_92);
		this._more_info4=document.createElement('div');
		this._more_info4__text=document.createElement('div');
		this._more_info4.className='ggskin ggskin_textdiv';
		this._more_info4.ggTextDiv=this._more_info4__text;
		this._more_info4.ggId="more info";
		this._more_info4.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1 };
		this._more_info4.ggVisible=true;
		this._more_info4.className="ggskin ggskin_text ";
		this._more_info4.ggType='text';
		hs ='';
		hs+='cursor : pointer;';
		hs+='height : 25px;';
		hs+='left : 59px;';
		hs+='position : absolute;';
		hs+='top : 34px;';
		hs+='visibility : inherit;';
		hs+='width : 178px;';
		hs+='pointer-events:auto;';
		hs+='font-size: 18px;';
		this._more_info4.setAttribute('style',hs);
		this._more_info4.style[domTransform + 'Origin']='50% 50%';
		hs ='position:absolute;';
		hs+='left: 0px;';
		hs+='top:  0px;';
		hs+='width: auto;';
		hs+='height: auto;';
		hs+='background: #000000;';
		hs+='background: rgba(0,0,0,0.117647);';
		hs+='border: 0px solid #000000;';
		hs+='color: rgba(255,255,255,1);';
		hs+='text-align: left;';
		hs+='white-space: nowrap;';
		hs+='padding: 0px 1px 0px 1px;';
		hs+='overflow: hidden;';
		this._more_info4__text.setAttribute('style',hs);
		this._more_info4__text.innerHTML="MORE INFO";
		this._more_info4.appendChild(this._more_info4__text);
		me._more_info4.ggIsActive=function() {
			if ((this.parentNode) && (this.parentNode.ggIsActive)) {
				return this.parentNode.ggIsActive();
			}
			return false;
		}
		me._more_info4.ggElementNodeId=function() {
			if ((this.parentNode) && (this.parentNode.ggElementNodeId)) {
				return this.parentNode.ggElementNodeId();
			}
			return me.ggNodeId;
		}
		me._more_info4.logicBlock_position = function() {
			var newLogicStatePosition;
			if (
				(me.player.getVariableValue('info') == true)
			)
			{
				newLogicStatePosition = 0;
			}
			else {
				newLogicStatePosition = -1;
			}
			if (me._more_info4.ggCurrentLogicStatePosition != newLogicStatePosition) {
				me._more_info4.ggCurrentLogicStatePosition = newLogicStatePosition;
				me._more_info4.style[domTransition]='left 500ms ease 0ms, top 500ms ease 0ms, opacity 500ms ease 0ms, visibility 500ms ease 0ms';
				if (me._more_info4.ggCurrentLogicStatePosition == 0) {
					me._more_info4.style.left='15px';
					me._more_info4.style.top='34px';
				}
				else {
					me._more_info4.style.left='59px';
					me._more_info4.style.top='34px';
				}
			}
		}
		me._more_info4.logicBlock_alpha = function() {
			var newLogicStateAlpha;
			if (
				(me.player.getVariableValue('info') == true)
			)
			{
				newLogicStateAlpha = 0;
			}
			else {
				newLogicStateAlpha = -1;
			}
			if (me._more_info4.ggCurrentLogicStateAlpha != newLogicStateAlpha) {
				me._more_info4.ggCurrentLogicStateAlpha = newLogicStateAlpha;
				me._more_info4.style[domTransition]='left 500ms ease 0ms, top 500ms ease 0ms, opacity 500ms ease 0ms, visibility 500ms ease 0ms';
				if (me._more_info4.ggCurrentLogicStateAlpha == 0) {
					me._more_info4.style.visibility="hidden";
					me._more_info4.style.opacity=0;
				}
				else {
					me._more_info4.style.visibility=me._more_info4.ggVisible?'inherit':'hidden';
					me._more_info4.style.opacity=1;
				}
			}
		}
		this._more_info4.onclick=function (e) {
			me.player.setVariableValue('info', !me.player.getVariableValue('info'));
		}
		this._more_info4.ggUpdatePosition=function (useTransition) {
		}
		this._green_walls5.appendChild(this._more_info4);
		this._close2=document.createElement('div');
		this._close2__text=document.createElement('div');
		this._close2.className='ggskin ggskin_textdiv';
		this._close2.ggTextDiv=this._close2__text;
		this._close2.ggId="close";
		this._close2.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1 };
		this._close2.ggVisible=true;
		this._close2.className="ggskin ggskin_text ";
		this._close2.ggType='text';
		hs ='';
		hs+='cursor : pointer;';
		hs+='height : 25px;';
		hs+='left : 59px;';
		hs+='position : absolute;';
		hs+='top : 34px;';
		hs+='visibility : inherit;';
		hs+='width : 178px;';
		hs+='pointer-events:auto;';
		hs+='font-size: 18px;';
		this._close2.setAttribute('style',hs);
		this._close2.style[domTransform + 'Origin']='50% 50%';
		hs ='position:absolute;';
		hs+='left: 0px;';
		hs+='top:  0px;';
		hs+='width: auto;';
		hs+='height: auto;';
		hs+='background: #000000;';
		hs+='background: rgba(0,0,0,0.117647);';
		hs+='border: 0px solid #000000;';
		hs+='color: rgba(255,255,255,1);';
		hs+='text-align: left;';
		hs+='white-space: nowrap;';
		hs+='padding: 0px 1px 0px 1px;';
		hs+='overflow: hidden;';
		this._close2__text.setAttribute('style',hs);
		this._close2__text.innerHTML="CLOSE";
		this._close2.appendChild(this._close2__text);
		me._close2.ggIsActive=function() {
			if ((this.parentNode) && (this.parentNode.ggIsActive)) {
				return this.parentNode.ggIsActive();
			}
			return false;
		}
		me._close2.ggElementNodeId=function() {
			if ((this.parentNode) && (this.parentNode.ggElementNodeId)) {
				return this.parentNode.ggElementNodeId();
			}
			return me.ggNodeId;
		}
		me._close2.logicBlock_position = function() {
			var newLogicStatePosition;
			if (
				(me.player.getVariableValue('info') == false)
			)
			{
				newLogicStatePosition = 0;
			}
			else {
				newLogicStatePosition = -1;
			}
			if (me._close2.ggCurrentLogicStatePosition != newLogicStatePosition) {
				me._close2.ggCurrentLogicStatePosition = newLogicStatePosition;
				me._close2.style[domTransition]='left 500ms ease 0ms, top 500ms ease 0ms, opacity 500ms ease 0ms, visibility 500ms ease 0ms';
				if (me._close2.ggCurrentLogicStatePosition == 0) {
					me._close2.style.left='15px';
					me._close2.style.top='34px';
				}
				else {
					me._close2.style.left='59px';
					me._close2.style.top='34px';
				}
			}
		}
		me._close2.logicBlock_alpha = function() {
			var newLogicStateAlpha;
			if (
				(me.player.getVariableValue('info') == false)
			)
			{
				newLogicStateAlpha = 0;
			}
			else {
				newLogicStateAlpha = -1;
			}
			if (me._close2.ggCurrentLogicStateAlpha != newLogicStateAlpha) {
				me._close2.ggCurrentLogicStateAlpha = newLogicStateAlpha;
				me._close2.style[domTransition]='left 500ms ease 0ms, top 500ms ease 0ms, opacity 500ms ease 0ms, visibility 500ms ease 0ms';
				if (me._close2.ggCurrentLogicStateAlpha == 0) {
					me._close2.style.visibility="hidden";
					me._close2.style.opacity=0;
				}
				else {
					me._close2.style.visibility=me._close2.ggVisible?'inherit':'hidden';
					me._close2.style.opacity=1;
				}
			}
		}
		this._close2.onclick=function (e) {
			me.player.setVariableValue('info', !me.player.getVariableValue('info'));
		}
		this._close2.ggUpdatePosition=function (useTransition) {
		}
		this._green_walls5.appendChild(this._close2);
		this._image_7=document.createElement('div');
		this._image_7__img=document.createElement('img');
		this._image_7__img.className='ggskin ggskin_image';
		this._image_7__img.setAttribute('src',basePath + 'images/image_7.png');
		this._image_7__img.setAttribute('style','position: absolute;top: 0px;left: 0px;width: 100%;height: 100%;-webkit-user-drag:none;pointer-events:none;;');
		this._image_7__img.className='ggskin ggskin_image';
		this._image_7__img['ondragstart']=function() { return false; };
		me.player.checkLoaded.push(this._image_7__img);
		this._image_7.appendChild(this._image_7__img);
		this._image_7.ggId="Image 7";
		this._image_7.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1 };
		this._image_7.ggVisible=true;
		this._image_7.className="ggskin ggskin_image ";
		this._image_7.ggType='image';
		hs ='';
		hs+='height : 71px;';
		hs+='left : -20px;';
		hs+='position : absolute;';
		hs+='top : -26px;';
		hs+='visibility : inherit;';
		hs+='width : 363px;';
		hs+='pointer-events:auto;';
		this._image_7.setAttribute('style',hs);
		this._image_7.style[domTransform + 'Origin']='50% 50%';
		me._image_7.ggIsActive=function() {
			if ((this.parentNode) && (this.parentNode.ggIsActive)) {
				return this.parentNode.ggIsActive();
			}
			return false;
		}
		me._image_7.ggElementNodeId=function() {
			if ((this.parentNode) && (this.parentNode.ggElementNodeId)) {
				return this.parentNode.ggElementNodeId();
			}
			return me.ggNodeId;
		}
		this._image_7.ggUpdatePosition=function (useTransition) {
		}
		this._green_walls5.appendChild(this._image_7);
		this._ht_frames.appendChild(this._green_walls5);
		this.__div = this._ht_frames;
	};
	function SkinHotspotClass_ht_example(skinObj,hotspot) {
		var me=this;
		var flag=false;
		var hs='';
		this.player=skinObj.player;
		this.skin=skinObj;
		this.hotspot=hotspot;
		var nodeId=String(hotspot.url);
		nodeId=(nodeId.charAt(0)=='{')?nodeId.substr(1, nodeId.length - 2):'';
		this.ggUserdata=this.skin.player.getNodeUserdata(nodeId);
		this.elementMouseDown=[];
		this.elementMouseOver=[];
		this.findElements=function(id,regex) {
			return me.skin.findElements(id,regex);
		}
		this._ht_example=document.createElement('div');
		this._ht_example.ggId="ht_example";
		this._ht_example.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1 };
		this._ht_example.ggVisible=true;
		this._ht_example.className="ggskin ggskin_hotspot ";
		this._ht_example.ggType='hotspot';
		hs ='';
		hs+='height : 5px;';
		hs+='left : 30px;';
		hs+='position : absolute;';
		hs+='top : 102px;';
		hs+='visibility : inherit;';
		hs+='width : 5px;';
		hs+='pointer-events:auto;';
		this._ht_example.setAttribute('style',hs);
		this._ht_example.style[domTransform + 'Origin']='50% 50%';
		me._ht_example.ggIsActive=function() {
			return me.player.getCurrentNode()==this.ggElementNodeId();
		}
		me._ht_example.ggElementNodeId=function() {
			return me.hotspot.url.substr(1, me.hotspot.url.length - 2);
		}
		this._ht_example.onclick=function (e) {
			me.skin.hotspotProxyClick(me.hotspot.id);
		}
		this._ht_example.ondblclick=function (e) {
			me.skin.hotspotProxyDoubleClick(me.hotspot.id);
		}
		this._ht_example.onmouseover=function (e) {
			me.player.setActiveHotspot(me.hotspot);
			me.skin.hotspotProxyOver(me.hotspot.id);
		}
		this._ht_example.onmouseout=function (e) {
			me.player.setActiveHotspot(null);
			me.skin.hotspotProxyOut(me.hotspot.id);
		}
		this._ht_example.ggUpdatePosition=function (useTransition) {
		}
		this._green_walls4=document.createElement('div');
		this._green_walls4.ggId="Green walls";
		this._green_walls4.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1 };
		this._green_walls4.ggVisible=true;
		this._green_walls4.className="ggskin ggskin_container ";
		this._green_walls4.ggType='container';
		hs ='';
		hs+='height : 294px;';
		hs+='left : -15px;';
		hs+='position : absolute;';
		hs+='top : -3px;';
		hs+='visibility : inherit;';
		hs+='width : 387px;';
		hs+='pointer-events:none;';
		this._green_walls4.setAttribute('style',hs);
		this._green_walls4.style[domTransform + 'Origin']='0% 0%';
		me._green_walls4.ggIsActive=function() {
			if ((this.parentNode) && (this.parentNode.ggIsActive)) {
				return this.parentNode.ggIsActive();
			}
			return false;
		}
		me._green_walls4.ggElementNodeId=function() {
			if ((this.parentNode) && (this.parentNode.ggElementNodeId)) {
				return this.parentNode.ggElementNodeId();
			}
			return me.ggNodeId;
		}
		me._green_walls4.logicBlock_scaling = function() {
			var newLogicStateScaling;
			if (
				(me.player.getViewerSize().width < 720)
			)
			{
				newLogicStateScaling = 0;
			}
			else {
				newLogicStateScaling = -1;
			}
			if (me._green_walls4.ggCurrentLogicStateScaling != newLogicStateScaling) {
				me._green_walls4.ggCurrentLogicStateScaling = newLogicStateScaling;
				me._green_walls4.style[domTransition]='' + cssPrefix + 'transform 1000ms ease 0ms';
				if (me._green_walls4.ggCurrentLogicStateScaling == 0) {
					me._green_walls4.ggParameter.sx = 0.7;
					me._green_walls4.ggParameter.sy = 0.7;
					me._green_walls4.style[domTransform]=parameterToTransform(me._green_walls4.ggParameter);
				}
				else {
					me._green_walls4.ggParameter.sx = 1;
					me._green_walls4.ggParameter.sy = 1;
					me._green_walls4.style[domTransform]=parameterToTransform(me._green_walls4.ggParameter);
				}
			}
		}
		this._green_walls4.ggUpdatePosition=function (useTransition) {
		}
		this._rectangle_41=document.createElement('div');
		this._rectangle_41.ggId="Rectangle 4";
		this._rectangle_41.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1 };
		this._rectangle_41.ggVisible=true;
		this._rectangle_41.className="ggskin ggskin_rectangle ";
		this._rectangle_41.ggType='rectangle';
		hs ='';
		hs+='background : #ffffff;';
		hs+='border : 0px solid #000000;';
		hs+='cursor : default;';
		hs+='height : 250px;';
		hs+='left : 35px;';
		hs+='position : absolute;';
		hs+='top : 59px;';
		hs+='visibility : inherit;';
		hs+='width : 3px;';
		hs+='pointer-events:auto;';
		this._rectangle_41.setAttribute('style',hs);
		this._rectangle_41.style[domTransform + 'Origin']='50% 50%';
		me._rectangle_41.ggIsActive=function() {
			if ((this.parentNode) && (this.parentNode.ggIsActive)) {
				return this.parentNode.ggIsActive();
			}
			return false;
		}
		me._rectangle_41.ggElementNodeId=function() {
			if ((this.parentNode) && (this.parentNode.ggElementNodeId)) {
				return this.parentNode.ggElementNodeId();
			}
			return me.ggNodeId;
		}
		me._rectangle_41.logicBlock_size = function() {
			var newLogicStateSize;
			if (
				(me.player.getVariableValue('info') == true)
			)
			{
				newLogicStateSize = 0;
			}
			else if (
				(me.player.getVariableValue('info') == false)
			)
			{
				newLogicStateSize = 1;
			}
			else {
				newLogicStateSize = -1;
			}
			if (me._rectangle_41.ggCurrentLogicStateSize != newLogicStateSize) {
				me._rectangle_41.ggCurrentLogicStateSize = newLogicStateSize;
				me._rectangle_41.style[domTransition]='width 500ms ease 0ms, height 500ms ease 0ms';
				if (me._rectangle_41.ggCurrentLogicStateSize == 0) {
					me._rectangle_41.style.width='3px';
					me._rectangle_41.style.height='260px';
					me.skin.updateSize(me._rectangle_41);
				}
				else if (me._rectangle_41.ggCurrentLogicStateSize == 1) {
					me._rectangle_41.style.width='3px';
					me._rectangle_41.style.height='3px';
					me.skin.updateSize(me._rectangle_41);
				}
				else {
					me._rectangle_41.style.width='3px';
					me._rectangle_41.style.height='250px';
					me.skin.updateSize(me._rectangle_41);
				}
			}
		}
		this._rectangle_41.ggUpdatePosition=function (useTransition) {
		}
		this._green_walls4.appendChild(this._rectangle_41);
		this._rectangle_51=document.createElement('div');
		this._rectangle_51.ggId="Rectangle 5";
		this._rectangle_51.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1 };
		this._rectangle_51.ggVisible=true;
		this._rectangle_51.className="ggskin ggskin_rectangle ";
		this._rectangle_51.ggType='rectangle';
		hs ='';
		hs+='background : rgba(255,255,255,0.745098);';
		hs+='border : 0px solid #000000;';
		hs+='cursor : pointer;';
		hs+='height : 1px;';
		hs+='left : 42px;';
		hs+='opacity : 0;';
		hs+='position : absolute;';
		hs+='top : 60px;';
		hs+='visibility : hidden;';
		hs+='width : 1px;';
		hs+='pointer-events:auto;';
		this._rectangle_51.setAttribute('style',hs);
		this._rectangle_51.style[domTransform + 'Origin']='50% 50%';
		me._rectangle_51.ggIsActive=function() {
			if ((this.parentNode) && (this.parentNode.ggIsActive)) {
				return this.parentNode.ggIsActive();
			}
			return false;
		}
		me._rectangle_51.ggElementNodeId=function() {
			if ((this.parentNode) && (this.parentNode.ggElementNodeId)) {
				return this.parentNode.ggElementNodeId();
			}
			return me.ggNodeId;
		}
		me._rectangle_51.logicBlock_size = function() {
			var newLogicStateSize;
			if (
				(me.player.getVariableValue('info') == true)
			)
			{
				newLogicStateSize = 0;
			}
			else {
				newLogicStateSize = -1;
			}
			if (me._rectangle_51.ggCurrentLogicStateSize != newLogicStateSize) {
				me._rectangle_51.ggCurrentLogicStateSize = newLogicStateSize;
				me._rectangle_51.style[domTransition]='width 500ms ease 0ms, height 500ms ease 0ms, opacity 500ms ease 0ms, visibility 500ms ease 0ms';
				if (me._rectangle_51.ggCurrentLogicStateSize == 0) {
					me._rectangle_51.style.width='350px';
					me._rectangle_51.style.height='270px';
					me.skin.updateSize(me._rectangle_51);
				}
				else {
					me._rectangle_51.style.width='1px';
					me._rectangle_51.style.height='1px';
					me.skin.updateSize(me._rectangle_51);
				}
			}
		}
		me._rectangle_51.logicBlock_alpha = function() {
			var newLogicStateAlpha;
			if (
				(me.player.getVariableValue('info') == true)
			)
			{
				newLogicStateAlpha = 0;
			}
			else {
				newLogicStateAlpha = -1;
			}
			if (me._rectangle_51.ggCurrentLogicStateAlpha != newLogicStateAlpha) {
				me._rectangle_51.ggCurrentLogicStateAlpha = newLogicStateAlpha;
				me._rectangle_51.style[domTransition]='width 500ms ease 0ms, height 500ms ease 0ms, opacity 500ms ease 0ms, visibility 500ms ease 0ms';
				if (me._rectangle_51.ggCurrentLogicStateAlpha == 0) {
					me._rectangle_51.style.visibility=me._rectangle_51.ggVisible?'inherit':'hidden';
					me._rectangle_51.style.opacity=1;
				}
				else {
					me._rectangle_51.style.visibility="hidden";
					me._rectangle_51.style.opacity=0;
				}
			}
		}
		this._rectangle_51.onclick=function (e) {
			me.player.setVariableValue('info', !me.player.getVariableValue('info'));
		}
		this._rectangle_51.ggUpdatePosition=function (useTransition) {
		}
		this._text_21=document.createElement('div');
		this._text_21__text=document.createElement('div');
		this._text_21.className='ggskin ggskin_textdiv';
		this._text_21.ggTextDiv=this._text_21__text;
		this._text_21.ggId="Text 2";
		this._text_21.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1 };
		this._text_21.ggVisible=true;
		this._text_21.className="ggskin ggskin_text ";
		this._text_21.ggType='text';
		hs ='';
		hs+='cursor : pointer;';
		hs+='height : 250px;';
		hs+='left : 21px;';
		hs+='position : absolute;';
		hs+='top : 9px;';
		hs+='visibility : inherit;';
		hs+='width : 300px;';
		hs+='pointer-events:auto;';
		hs+='font-size: 17px;';
		this._text_21.setAttribute('style',hs);
		this._text_21.style[domTransform + 'Origin']='50% 50%';
		hs ='position:absolute;';
		hs+='left: 0px;';
		hs+='top:  0px;';
		hs+='width: 300px;';
		hs+='height: 250px;';
		hs+='border: 0px solid #000000;';
		hs+='color: rgba(57,57,57,1);';
		hs+='text-align: left;';
		hs+='white-space: pre-wrap;';
		hs+='padding: 0px 1px 0px 1px;';
		hs+='overflow: hidden;';
		hs+='overflow-y: auto;';
		this._text_21__text.setAttribute('style',hs);
		this._text_21__text.innerHTML="Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo cons\"";
		this._text_21.appendChild(this._text_21__text);
		me._text_21.ggIsActive=function() {
			if ((this.parentNode) && (this.parentNode.ggIsActive)) {
				return this.parentNode.ggIsActive();
			}
			return false;
		}
		me._text_21.ggElementNodeId=function() {
			if ((this.parentNode) && (this.parentNode.ggElementNodeId)) {
				return this.parentNode.ggElementNodeId();
			}
			return me.ggNodeId;
		}
		this._text_21.ggUpdatePosition=function (useTransition) {
		}
		this._rectangle_51.appendChild(this._text_21);
		this._green_walls4.appendChild(this._rectangle_51);
		this._svg_16=document.createElement('div');
		this._svg_16__img=document.createElement('img');
		this._svg_16__img.className='ggskin ggskin_svg';
		this._svg_16__img.setAttribute('src',basePath + 'images/svg_16.svg');
		this._svg_16__img.setAttribute('style','position: absolute;top: 0px;left: 0px;width: 100%;height: 100%;-webkit-user-drag:none;pointer-events:none;;');
		this._svg_16__img['ondragstart']=function() { return false; };
		this._svg_16.appendChild(this._svg_16__img);
		this._svg_16.ggId="Svg 1";
		this._svg_16.ggParameter={ rx:0,ry:0,a:45,sx:1,sy:1 };
		this._svg_16.ggVisible=true;
		this._svg_16.className="ggskin ggskin_svg ";
		this._svg_16.ggType='svg';
		hs ='';
		hs+='cursor : pointer;';
		hs+='height : 30px;';
		hs+='left : 22px;';
		hs+='position : absolute;';
		hs+='top : 31px;';
		hs+='visibility : inherit;';
		hs+='width : 30px;';
		hs+='pointer-events:auto;';
		this._svg_16.setAttribute('style',hs);
		this._svg_16.style[domTransform + 'Origin']='50% 50%';
		this._svg_16.style[domTransform]=parameterToTransform(this._svg_16.ggParameter);
		me._svg_16.ggIsActive=function() {
			if ((this.parentNode) && (this.parentNode.ggIsActive)) {
				return this.parentNode.ggIsActive();
			}
			return false;
		}
		me._svg_16.ggElementNodeId=function() {
			if ((this.parentNode) && (this.parentNode.ggElementNodeId)) {
				return this.parentNode.ggElementNodeId();
			}
			return me.ggNodeId;
		}
		me._svg_16.logicBlock_scaling = function() {
			var newLogicStateScaling;
			if (
				(me.player.getVariableValue('info') == true)
			)
			{
				newLogicStateScaling = 0;
			}
			else {
				newLogicStateScaling = -1;
			}
			if (me._svg_16.ggCurrentLogicStateScaling != newLogicStateScaling) {
				me._svg_16.ggCurrentLogicStateScaling = newLogicStateScaling;
				me._svg_16.style[domTransition]='' + cssPrefix + 'transform 500ms ease 0ms, ' + cssPrefix + 'transform 500ms ease 0ms';
				if (me._svg_16.ggCurrentLogicStateScaling == 0) {
					me._svg_16.ggParameter.sx = 0.8;
					me._svg_16.ggParameter.sy = 0.8;
					me._svg_16.style[domTransform]=parameterToTransform(me._svg_16.ggParameter);
				}
				else {
					me._svg_16.ggParameter.sx = 1;
					me._svg_16.ggParameter.sy = 1;
					me._svg_16.style[domTransform]=parameterToTransform(me._svg_16.ggParameter);
				}
			}
		}
		me._svg_16.logicBlock_angle = function() {
			var newLogicStateAngle;
			if (
				(me.player.getVariableValue('info') == true)
			)
			{
				newLogicStateAngle = 0;
			}
			else {
				newLogicStateAngle = -1;
			}
			if (me._svg_16.ggCurrentLogicStateAngle != newLogicStateAngle) {
				me._svg_16.ggCurrentLogicStateAngle = newLogicStateAngle;
				me._svg_16.style[domTransition]='' + cssPrefix + 'transform 500ms ease 0ms, ' + cssPrefix + 'transform 500ms ease 0ms';
				if (me._svg_16.ggCurrentLogicStateAngle == 0) {
					me._svg_16.ggParameter.a = 0;
					me._svg_16.style[domTransform]=parameterToTransform(me._svg_16.ggParameter);
				}
				else {
					me._svg_16.ggParameter.a = 45;
					me._svg_16.style[domTransform]=parameterToTransform(me._svg_16.ggParameter);
				}
			}
		}
		this._svg_16.onclick=function (e) {
			me.player.setVariableValue('info', !me.player.getVariableValue('info'));
		}
		this._svg_16.ggUpdatePosition=function (useTransition) {
		}
		this._green_walls4.appendChild(this._svg_16);
		this._rectangle_91=document.createElement('div');
		this._rectangle_91.ggId="Rectangle 9";
		this._rectangle_91.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1 };
		this._rectangle_91.ggVisible=true;
		this._rectangle_91.className="ggskin ggskin_rectangle ";
		this._rectangle_91.ggType='rectangle';
		hs ='';
		hs+='background : rgba(0,0,0,0.313725);';
		hs+='border : 0px solid #000000;';
		hs+='cursor : pointer;';
		hs+='height : 25px;';
		hs+='left : 58px;';
		hs+='position : absolute;';
		hs+='top : 33px;';
		hs+='visibility : inherit;';
		hs+='width : 179px;';
		hs+='pointer-events:auto;';
		this._rectangle_91.setAttribute('style',hs);
		this._rectangle_91.style[domTransform + 'Origin']='50% 50%';
		me._rectangle_91.ggIsActive=function() {
			if ((this.parentNode) && (this.parentNode.ggIsActive)) {
				return this.parentNode.ggIsActive();
			}
			return false;
		}
		me._rectangle_91.ggElementNodeId=function() {
			if ((this.parentNode) && (this.parentNode.ggElementNodeId)) {
				return this.parentNode.ggElementNodeId();
			}
			return me.ggNodeId;
		}
		this._rectangle_91.onclick=function (e) {
			me.player.setVariableValue('info', !me.player.getVariableValue('info'));
		}
		this._rectangle_91.ggUpdatePosition=function (useTransition) {
		}
		this._green_walls4.appendChild(this._rectangle_91);
		this._more_info3=document.createElement('div');
		this._more_info3__text=document.createElement('div');
		this._more_info3.className='ggskin ggskin_textdiv';
		this._more_info3.ggTextDiv=this._more_info3__text;
		this._more_info3.ggId="more info";
		this._more_info3.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1 };
		this._more_info3.ggVisible=true;
		this._more_info3.className="ggskin ggskin_text ";
		this._more_info3.ggType='text';
		hs ='';
		hs+='cursor : pointer;';
		hs+='height : 25px;';
		hs+='left : 59px;';
		hs+='position : absolute;';
		hs+='top : 34px;';
		hs+='visibility : inherit;';
		hs+='width : 178px;';
		hs+='pointer-events:auto;';
		hs+='font-size: 18px;';
		this._more_info3.setAttribute('style',hs);
		this._more_info3.style[domTransform + 'Origin']='50% 50%';
		hs ='position:absolute;';
		hs+='left: 0px;';
		hs+='top:  0px;';
		hs+='width: auto;';
		hs+='height: auto;';
		hs+='background: #000000;';
		hs+='background: rgba(0,0,0,0.117647);';
		hs+='border: 0px solid #000000;';
		hs+='color: rgba(255,255,255,1);';
		hs+='text-align: left;';
		hs+='white-space: nowrap;';
		hs+='padding: 0px 1px 0px 1px;';
		hs+='overflow: hidden;';
		this._more_info3__text.setAttribute('style',hs);
		this._more_info3__text.innerHTML="MORE INFO";
		this._more_info3.appendChild(this._more_info3__text);
		me._more_info3.ggIsActive=function() {
			if ((this.parentNode) && (this.parentNode.ggIsActive)) {
				return this.parentNode.ggIsActive();
			}
			return false;
		}
		me._more_info3.ggElementNodeId=function() {
			if ((this.parentNode) && (this.parentNode.ggElementNodeId)) {
				return this.parentNode.ggElementNodeId();
			}
			return me.ggNodeId;
		}
		me._more_info3.logicBlock_position = function() {
			var newLogicStatePosition;
			if (
				(me.player.getVariableValue('info') == true)
			)
			{
				newLogicStatePosition = 0;
			}
			else {
				newLogicStatePosition = -1;
			}
			if (me._more_info3.ggCurrentLogicStatePosition != newLogicStatePosition) {
				me._more_info3.ggCurrentLogicStatePosition = newLogicStatePosition;
				me._more_info3.style[domTransition]='left 500ms ease 0ms, top 500ms ease 0ms, opacity 500ms ease 0ms, visibility 500ms ease 0ms';
				if (me._more_info3.ggCurrentLogicStatePosition == 0) {
					me._more_info3.style.left='15px';
					me._more_info3.style.top='34px';
				}
				else {
					me._more_info3.style.left='59px';
					me._more_info3.style.top='34px';
				}
			}
		}
		me._more_info3.logicBlock_alpha = function() {
			var newLogicStateAlpha;
			if (
				(me.player.getVariableValue('info') == true)
			)
			{
				newLogicStateAlpha = 0;
			}
			else {
				newLogicStateAlpha = -1;
			}
			if (me._more_info3.ggCurrentLogicStateAlpha != newLogicStateAlpha) {
				me._more_info3.ggCurrentLogicStateAlpha = newLogicStateAlpha;
				me._more_info3.style[domTransition]='left 500ms ease 0ms, top 500ms ease 0ms, opacity 500ms ease 0ms, visibility 500ms ease 0ms';
				if (me._more_info3.ggCurrentLogicStateAlpha == 0) {
					me._more_info3.style.visibility="hidden";
					me._more_info3.style.opacity=0;
				}
				else {
					me._more_info3.style.visibility=me._more_info3.ggVisible?'inherit':'hidden';
					me._more_info3.style.opacity=1;
				}
			}
		}
		this._more_info3.onclick=function (e) {
			me.player.setVariableValue('info', !me.player.getVariableValue('info'));
		}
		this._more_info3.ggUpdatePosition=function (useTransition) {
		}
		this._green_walls4.appendChild(this._more_info3);
		this._close1=document.createElement('div');
		this._close1__text=document.createElement('div');
		this._close1.className='ggskin ggskin_textdiv';
		this._close1.ggTextDiv=this._close1__text;
		this._close1.ggId="close";
		this._close1.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1 };
		this._close1.ggVisible=true;
		this._close1.className="ggskin ggskin_text ";
		this._close1.ggType='text';
		hs ='';
		hs+='cursor : pointer;';
		hs+='height : 25px;';
		hs+='left : 59px;';
		hs+='position : absolute;';
		hs+='top : 34px;';
		hs+='visibility : inherit;';
		hs+='width : 178px;';
		hs+='pointer-events:auto;';
		hs+='font-size: 18px;';
		this._close1.setAttribute('style',hs);
		this._close1.style[domTransform + 'Origin']='50% 50%';
		hs ='position:absolute;';
		hs+='left: 0px;';
		hs+='top:  0px;';
		hs+='width: auto;';
		hs+='height: auto;';
		hs+='background: #000000;';
		hs+='background: rgba(0,0,0,0.117647);';
		hs+='border: 0px solid #000000;';
		hs+='color: rgba(255,255,255,1);';
		hs+='text-align: left;';
		hs+='white-space: nowrap;';
		hs+='padding: 0px 1px 0px 1px;';
		hs+='overflow: hidden;';
		this._close1__text.setAttribute('style',hs);
		this._close1__text.innerHTML="CLOSE";
		this._close1.appendChild(this._close1__text);
		me._close1.ggIsActive=function() {
			if ((this.parentNode) && (this.parentNode.ggIsActive)) {
				return this.parentNode.ggIsActive();
			}
			return false;
		}
		me._close1.ggElementNodeId=function() {
			if ((this.parentNode) && (this.parentNode.ggElementNodeId)) {
				return this.parentNode.ggElementNodeId();
			}
			return me.ggNodeId;
		}
		me._close1.logicBlock_position = function() {
			var newLogicStatePosition;
			if (
				(me.player.getVariableValue('info') == false)
			)
			{
				newLogicStatePosition = 0;
			}
			else {
				newLogicStatePosition = -1;
			}
			if (me._close1.ggCurrentLogicStatePosition != newLogicStatePosition) {
				me._close1.ggCurrentLogicStatePosition = newLogicStatePosition;
				me._close1.style[domTransition]='left 500ms ease 0ms, top 500ms ease 0ms, opacity 500ms ease 0ms, visibility 500ms ease 0ms';
				if (me._close1.ggCurrentLogicStatePosition == 0) {
					me._close1.style.left='15px';
					me._close1.style.top='34px';
				}
				else {
					me._close1.style.left='59px';
					me._close1.style.top='34px';
				}
			}
		}
		me._close1.logicBlock_alpha = function() {
			var newLogicStateAlpha;
			if (
				(me.player.getVariableValue('info') == false)
			)
			{
				newLogicStateAlpha = 0;
			}
			else {
				newLogicStateAlpha = -1;
			}
			if (me._close1.ggCurrentLogicStateAlpha != newLogicStateAlpha) {
				me._close1.ggCurrentLogicStateAlpha = newLogicStateAlpha;
				me._close1.style[domTransition]='left 500ms ease 0ms, top 500ms ease 0ms, opacity 500ms ease 0ms, visibility 500ms ease 0ms';
				if (me._close1.ggCurrentLogicStateAlpha == 0) {
					me._close1.style.visibility="hidden";
					me._close1.style.opacity=0;
				}
				else {
					me._close1.style.visibility=me._close1.ggVisible?'inherit':'hidden';
					me._close1.style.opacity=1;
				}
			}
		}
		this._close1.onclick=function (e) {
			me.player.setVariableValue('info', !me.player.getVariableValue('info'));
		}
		this._close1.ggUpdatePosition=function (useTransition) {
		}
		this._green_walls4.appendChild(this._close1);
		this._ht_example.appendChild(this._green_walls4);
		this._text_41=document.createElement('div');
		this._text_41__text=document.createElement('div');
		this._text_41.className='ggskin ggskin_textdiv';
		this._text_41.ggTextDiv=this._text_41__text;
		this._text_41.ggId="Text 4";
		this._text_41.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1 };
		this._text_41.ggVisible=true;
		this._text_41.className="ggskin ggskin_text ";
		this._text_41.ggType='text';
		hs ='';
		hs+='height : 23px;';
		hs+='left : -5px;';
		hs+='position : absolute;';
		hs+='top : 0px;';
		hs+='visibility : inherit;';
		hs+='width : 272px;';
		hs+='pointer-events:auto;';
		this._text_41.setAttribute('style',hs);
		this._text_41.style[domTransform + 'Origin']='50% 50%';
		hs ='position:absolute;';
		hs+='cursor: default;';
		hs+='left: 0px;';
		hs+='top:  0px;';
		hs+='width: 272px;';
		hs+='height: 23px;';
		hs+='background: #ffffff;';
		hs+='border: 0px solid #000000;';
		hs+='color: #000000;';
		hs+='text-align: left;';
		hs+='white-space: nowrap;';
		hs+='padding: 0px 1px 0px 1px;';
		hs+='overflow: hidden;';
		this._text_41__text.setAttribute('style',hs);
		this._text_41__text.innerHTML="HEALTHCARE";
		this._text_41.appendChild(this._text_41__text);
		me._text_41.ggIsActive=function() {
			if ((this.parentNode) && (this.parentNode.ggIsActive)) {
				return this.parentNode.ggIsActive();
			}
			return false;
		}
		me._text_41.ggElementNodeId=function() {
			if ((this.parentNode) && (this.parentNode.ggElementNodeId)) {
				return this.parentNode.ggElementNodeId();
			}
			return me.ggNodeId;
		}
		this._text_41.ggUpdatePosition=function (useTransition) {
		}
		this._ht_example.appendChild(this._text_41);
		this.__div = this._ht_example;
	};
	function SkinHotspotClass_ht_info(skinObj,hotspot) {
		var me=this;
		var flag=false;
		var hs='';
		this.player=skinObj.player;
		this.skin=skinObj;
		this.hotspot=hotspot;
		var nodeId=String(hotspot.url);
		nodeId=(nodeId.charAt(0)=='{')?nodeId.substr(1, nodeId.length - 2):'';
		this.ggUserdata=this.skin.player.getNodeUserdata(nodeId);
		this.elementMouseDown=[];
		this.elementMouseOver=[];
		this.findElements=function(id,regex) {
			return me.skin.findElements(id,regex);
		}
		this._ht_info=document.createElement('div');
		this._ht_info.ggId="ht_info";
		this._ht_info.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1 };
		this._ht_info.ggVisible=true;
		this._ht_info.className="ggskin ggskin_hotspot ";
		this._ht_info.ggType='hotspot';
		hs ='';
		hs+='height : 5px;';
		hs+='left : 30px;';
		hs+='position : absolute;';
		hs+='top : 102px;';
		hs+='visibility : inherit;';
		hs+='width : 5px;';
		hs+='pointer-events:auto;';
		this._ht_info.setAttribute('style',hs);
		this._ht_info.style[domTransform + 'Origin']='50% 50%';
		me._ht_info.ggIsActive=function() {
			return me.player.getCurrentNode()==this.ggElementNodeId();
		}
		me._ht_info.ggElementNodeId=function() {
			return me.hotspot.url.substr(1, me.hotspot.url.length - 2);
		}
		this._ht_info.onclick=function (e) {
			me.skin.hotspotProxyClick(me.hotspot.id);
		}
		this._ht_info.ondblclick=function (e) {
			me.skin.hotspotProxyDoubleClick(me.hotspot.id);
		}
		this._ht_info.onmouseover=function (e) {
			me.player.setActiveHotspot(me.hotspot);
			me.skin.hotspotProxyOver(me.hotspot.id);
		}
		this._ht_info.onmouseout=function (e) {
			me.player.setActiveHotspot(null);
			me.skin.hotspotProxyOut(me.hotspot.id);
		}
		this._ht_info.ggUpdatePosition=function (useTransition) {
		}
		this._green_walls3=document.createElement('div');
		this._green_walls3.ggId="Green walls";
		this._green_walls3.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1 };
		this._green_walls3.ggVisible=true;
		this._green_walls3.className="ggskin ggskin_container ";
		this._green_walls3.ggType='container';
		hs ='';
		hs+='height : 294px;';
		hs+='left : -36px;';
		hs+='position : absolute;';
		hs+='top : -44px;';
		hs+='visibility : inherit;';
		hs+='width : 387px;';
		hs+='pointer-events:none;';
		this._green_walls3.setAttribute('style',hs);
		this._green_walls3.style[domTransform + 'Origin']='0% 0%';
		me._green_walls3.ggIsActive=function() {
			if ((this.parentNode) && (this.parentNode.ggIsActive)) {
				return this.parentNode.ggIsActive();
			}
			return false;
		}
		me._green_walls3.ggElementNodeId=function() {
			if ((this.parentNode) && (this.parentNode.ggElementNodeId)) {
				return this.parentNode.ggElementNodeId();
			}
			return me.ggNodeId;
		}
		me._green_walls3.logicBlock_scaling = function() {
			var newLogicStateScaling;
			if (
				(me.player.getViewerSize().width < 720)
			)
			{
				newLogicStateScaling = 0;
			}
			else {
				newLogicStateScaling = -1;
			}
			if (me._green_walls3.ggCurrentLogicStateScaling != newLogicStateScaling) {
				me._green_walls3.ggCurrentLogicStateScaling = newLogicStateScaling;
				me._green_walls3.style[domTransition]='' + cssPrefix + 'transform 1000ms ease 0ms';
				if (me._green_walls3.ggCurrentLogicStateScaling == 0) {
					me._green_walls3.ggParameter.sx = 0.7;
					me._green_walls3.ggParameter.sy = 0.7;
					me._green_walls3.style[domTransform]=parameterToTransform(me._green_walls3.ggParameter);
				}
				else {
					me._green_walls3.ggParameter.sx = 1;
					me._green_walls3.ggParameter.sy = 1;
					me._green_walls3.style[domTransform]=parameterToTransform(me._green_walls3.ggParameter);
				}
			}
		}
		this._green_walls3.ggUpdatePosition=function (useTransition) {
		}
		this._svg_15=document.createElement('div');
		this._svg_15__img=document.createElement('img');
		this._svg_15__img.className='ggskin ggskin_svg';
		this._svg_15__img.setAttribute('src',basePath + 'images/svg_15.svg');
		this._svg_15__img.setAttribute('style','position: absolute;top: 0px;left: 0px;width: 100%;height: 100%;-webkit-user-drag:none;pointer-events:none;;');
		this._svg_15__img['ondragstart']=function() { return false; };
		this._svg_15.appendChild(this._svg_15__img);
		this._svg_15.ggId="Svg 1";
		this._svg_15.ggParameter={ rx:0,ry:0,a:45,sx:1,sy:1 };
		this._svg_15.ggVisible=true;
		this._svg_15.className="ggskin ggskin_svg ";
		this._svg_15.ggType='svg';
		hs ='';
		hs+='cursor : pointer;';
		hs+='height : 30px;';
		hs+='left : 22px;';
		hs+='position : absolute;';
		hs+='top : 31px;';
		hs+='visibility : inherit;';
		hs+='width : 30px;';
		hs+='pointer-events:auto;';
		this._svg_15.setAttribute('style',hs);
		this._svg_15.style[domTransform + 'Origin']='50% 50%';
		this._svg_15.style[domTransform]=parameterToTransform(this._svg_15.ggParameter);
		me._svg_15.ggIsActive=function() {
			if ((this.parentNode) && (this.parentNode.ggIsActive)) {
				return this.parentNode.ggIsActive();
			}
			return false;
		}
		me._svg_15.ggElementNodeId=function() {
			if ((this.parentNode) && (this.parentNode.ggElementNodeId)) {
				return this.parentNode.ggElementNodeId();
			}
			return me.ggNodeId;
		}
		me._svg_15.logicBlock_scaling = function() {
			var newLogicStateScaling;
			if (
				(me.player.getVariableValue('info') == true)
			)
			{
				newLogicStateScaling = 0;
			}
			else {
				newLogicStateScaling = -1;
			}
			if (me._svg_15.ggCurrentLogicStateScaling != newLogicStateScaling) {
				me._svg_15.ggCurrentLogicStateScaling = newLogicStateScaling;
				me._svg_15.style[domTransition]='' + cssPrefix + 'transform 500ms ease 0ms, ' + cssPrefix + 'transform 500ms ease 0ms';
				if (me._svg_15.ggCurrentLogicStateScaling == 0) {
					me._svg_15.ggParameter.sx = 0.8;
					me._svg_15.ggParameter.sy = 0.8;
					me._svg_15.style[domTransform]=parameterToTransform(me._svg_15.ggParameter);
				}
				else {
					me._svg_15.ggParameter.sx = 1;
					me._svg_15.ggParameter.sy = 1;
					me._svg_15.style[domTransform]=parameterToTransform(me._svg_15.ggParameter);
				}
			}
		}
		me._svg_15.logicBlock_angle = function() {
			var newLogicStateAngle;
			if (
				(me.player.getVariableValue('info') == true)
			)
			{
				newLogicStateAngle = 0;
			}
			else {
				newLogicStateAngle = -1;
			}
			if (me._svg_15.ggCurrentLogicStateAngle != newLogicStateAngle) {
				me._svg_15.ggCurrentLogicStateAngle = newLogicStateAngle;
				me._svg_15.style[domTransition]='' + cssPrefix + 'transform 500ms ease 0ms, ' + cssPrefix + 'transform 500ms ease 0ms';
				if (me._svg_15.ggCurrentLogicStateAngle == 0) {
					me._svg_15.ggParameter.a = 0;
					me._svg_15.style[domTransform]=parameterToTransform(me._svg_15.ggParameter);
				}
				else {
					me._svg_15.ggParameter.a = 45;
					me._svg_15.style[domTransform]=parameterToTransform(me._svg_15.ggParameter);
				}
			}
		}
		this._svg_15.onclick=function (e) {
			me.player.setVariableValue('about', !me.player.getVariableValue('about'));
		}
		this._svg_15.ggUpdatePosition=function (useTransition) {
		}
		this._green_walls3.appendChild(this._svg_15);
		this._more_info2=document.createElement('div');
		this._more_info2__text=document.createElement('div');
		this._more_info2.className='ggskin ggskin_textdiv';
		this._more_info2.ggTextDiv=this._more_info2__text;
		this._more_info2.ggId="more info";
		this._more_info2.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1 };
		this._more_info2.ggVisible=true;
		this._more_info2.className="ggskin ggskin_text ";
		this._more_info2.ggType='text';
		hs ='';
		hs+='cursor : pointer;';
		hs+='height : 25px;';
		hs+='left : 59px;';
		hs+='position : absolute;';
		hs+='top : 34px;';
		hs+='visibility : inherit;';
		hs+='width : 178px;';
		hs+='pointer-events:auto;';
		hs+='font-size: 18px;';
		this._more_info2.setAttribute('style',hs);
		this._more_info2.style[domTransform + 'Origin']='50% 50%';
		hs ='position:absolute;';
		hs+='left: 0px;';
		hs+='top:  0px;';
		hs+='width: auto;';
		hs+='height: auto;';
		hs+='background: #000000;';
		hs+='background: rgba(0,0,0,0.117647);';
		hs+='border: 0px solid #000000;';
		hs+='color: rgba(255,255,255,1);';
		hs+='text-align: left;';
		hs+='white-space: nowrap;';
		hs+='padding: 0px 1px 0px 1px;';
		hs+='overflow: hidden;';
		this._more_info2__text.setAttribute('style',hs);
		this._more_info2__text.innerHTML="ABOUT US";
		this._more_info2.appendChild(this._more_info2__text);
		me._more_info2.ggIsActive=function() {
			if ((this.parentNode) && (this.parentNode.ggIsActive)) {
				return this.parentNode.ggIsActive();
			}
			return false;
		}
		me._more_info2.ggElementNodeId=function() {
			if ((this.parentNode) && (this.parentNode.ggElementNodeId)) {
				return this.parentNode.ggElementNodeId();
			}
			return me.ggNodeId;
		}
		me._more_info2.logicBlock_alpha = function() {
			var newLogicStateAlpha;
			if (
				(me.player.getVariableValue('about') == true)
			)
			{
				newLogicStateAlpha = 0;
			}
			else {
				newLogicStateAlpha = -1;
			}
			if (me._more_info2.ggCurrentLogicStateAlpha != newLogicStateAlpha) {
				me._more_info2.ggCurrentLogicStateAlpha = newLogicStateAlpha;
				me._more_info2.style[domTransition]='opacity 500ms ease 0ms, visibility 500ms ease 0ms';
				if (me._more_info2.ggCurrentLogicStateAlpha == 0) {
					me._more_info2.style.visibility="hidden";
					me._more_info2.style.opacity=0;
				}
				else {
					me._more_info2.style.visibility=me._more_info2.ggVisible?'inherit':'hidden';
					me._more_info2.style.opacity=1;
				}
			}
		}
		this._more_info2.onclick=function (e) {
			me.player.setVariableValue('about', !me.player.getVariableValue('about'));
		}
		this._more_info2.ggUpdatePosition=function (useTransition) {
		}
		this._green_walls3.appendChild(this._more_info2);
		this._ht_info.appendChild(this._green_walls3);
		this.__div = this._ht_info;
	};
	function SkinHotspotClass_ht_caro(skinObj,hotspot) {
		var me=this;
		var flag=false;
		var hs='';
		this.player=skinObj.player;
		this.skin=skinObj;
		this.hotspot=hotspot;
		var nodeId=String(hotspot.url);
		nodeId=(nodeId.charAt(0)=='{')?nodeId.substr(1, nodeId.length - 2):'';
		this.ggUserdata=this.skin.player.getNodeUserdata(nodeId);
		this.elementMouseDown=[];
		this.elementMouseOver=[];
		this.findElements=function(id,regex) {
			return me.skin.findElements(id,regex);
		}
		this._ht_caro=document.createElement('div');
		this._ht_caro.ggId="ht_caro";
		this._ht_caro.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1 };
		this._ht_caro.ggVisible=true;
		this._ht_caro.className="ggskin ggskin_hotspot ";
		this._ht_caro.ggType='hotspot';
		hs ='';
		hs+='height : 5px;';
		hs+='left : 30px;';
		hs+='position : absolute;';
		hs+='top : 102px;';
		hs+='visibility : inherit;';
		hs+='width : 5px;';
		hs+='pointer-events:auto;';
		this._ht_caro.setAttribute('style',hs);
		this._ht_caro.style[domTransform + 'Origin']='50% 50%';
		me._ht_caro.ggIsActive=function() {
			return me.player.getCurrentNode()==this.ggElementNodeId();
		}
		me._ht_caro.ggElementNodeId=function() {
			return me.hotspot.url.substr(1, me.hotspot.url.length - 2);
		}
		me._ht_caro.logicBlock_scaling = function() {
			var newLogicStateScaling;
			if (
				(me.player.getViewerSize().width < 720)
			)
			{
				newLogicStateScaling = 0;
			}
			else {
				newLogicStateScaling = -1;
			}
			if (me._ht_caro.ggCurrentLogicStateScaling != newLogicStateScaling) {
				me._ht_caro.ggCurrentLogicStateScaling = newLogicStateScaling;
				me._ht_caro.style[domTransition]='' + cssPrefix + 'transform 1000ms ease 0ms';
				if (me._ht_caro.ggCurrentLogicStateScaling == 0) {
					me._ht_caro.ggParameter.sx = 0.7;
					me._ht_caro.ggParameter.sy = 0.7;
					me._ht_caro.style[domTransform]=parameterToTransform(me._ht_caro.ggParameter);
				}
				else {
					me._ht_caro.ggParameter.sx = 1;
					me._ht_caro.ggParameter.sy = 1;
					me._ht_caro.style[domTransform]=parameterToTransform(me._ht_caro.ggParameter);
				}
			}
		}
		this._ht_caro.onclick=function (e) {
			me.player.setVariableValue('caro', true);
			me.skin.hotspotProxyClick(me.hotspot.id);
		}
		this._ht_caro.ondblclick=function (e) {
			me.skin.hotspotProxyDoubleClick(me.hotspot.id);
		}
		this._ht_caro.onmouseover=function (e) {
			me.player.setActiveHotspot(me.hotspot);
			me.skin.hotspotProxyOver(me.hotspot.id);
		}
		this._ht_caro.onmouseout=function (e) {
			me.player.setActiveHotspot(null);
			me.skin.hotspotProxyOut(me.hotspot.id);
		}
		this._ht_caro.ggUpdatePosition=function (useTransition) {
		}
		this._green_walls2=document.createElement('div');
		this._green_walls2.ggId="Green walls";
		this._green_walls2.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1 };
		this._green_walls2.ggVisible=true;
		this._green_walls2.className="ggskin ggskin_container ";
		this._green_walls2.ggType='container';
		hs ='';
		hs+='height : 294px;';
		hs+='left : -16px;';
		hs+='position : absolute;';
		hs+='top : -3px;';
		hs+='visibility : inherit;';
		hs+='width : 387px;';
		hs+='pointer-events:none;';
		this._green_walls2.setAttribute('style',hs);
		this._green_walls2.style[domTransform + 'Origin']='0% 0%';
		me._green_walls2.ggIsActive=function() {
			if ((this.parentNode) && (this.parentNode.ggIsActive)) {
				return this.parentNode.ggIsActive();
			}
			return false;
		}
		me._green_walls2.ggElementNodeId=function() {
			if ((this.parentNode) && (this.parentNode.ggElementNodeId)) {
				return this.parentNode.ggElementNodeId();
			}
			return me.ggNodeId;
		}
		me._green_walls2.logicBlock_scaling = function() {
			var newLogicStateScaling;
			if (
				(me.player.getViewerSize().width < 720)
			)
			{
				newLogicStateScaling = 0;
			}
			else {
				newLogicStateScaling = -1;
			}
			if (me._green_walls2.ggCurrentLogicStateScaling != newLogicStateScaling) {
				me._green_walls2.ggCurrentLogicStateScaling = newLogicStateScaling;
				me._green_walls2.style[domTransition]='' + cssPrefix + 'transform 1000ms ease 0ms';
				if (me._green_walls2.ggCurrentLogicStateScaling == 0) {
					me._green_walls2.ggParameter.sx = 0.7;
					me._green_walls2.ggParameter.sy = 0.7;
					me._green_walls2.style[domTransform]=parameterToTransform(me._green_walls2.ggParameter);
				}
				else {
					me._green_walls2.ggParameter.sx = 1;
					me._green_walls2.ggParameter.sy = 1;
					me._green_walls2.style[domTransform]=parameterToTransform(me._green_walls2.ggParameter);
				}
			}
		}
		this._green_walls2.ggUpdatePosition=function (useTransition) {
		}
		this._image_8=document.createElement('div');
		this._image_8__img=document.createElement('img');
		this._image_8__img.className='ggskin ggskin_image';
		this._image_8__img.setAttribute('src',basePath + 'images/image_8.png');
		this._image_8__img.setAttribute('style','position: absolute;top: 0px;left: 0px;width: 100%;height: 100%;-webkit-user-drag:none;pointer-events:none;;');
		this._image_8__img.className='ggskin ggskin_image';
		this._image_8__img['ondragstart']=function() { return false; };
		me.player.checkLoaded.push(this._image_8__img);
		this._image_8.appendChild(this._image_8__img);
		this._image_8.ggId="Image 8";
		this._image_8.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1 };
		this._image_8.ggVisible=true;
		this._image_8.className="ggskin ggskin_image ";
		this._image_8.ggType='image';
		hs ='';
		hs+='cursor : pointer;';
		hs+='height : 100px;';
		hs+='left : -46px;';
		hs+='position : absolute;';
		hs+='top : -43px;';
		hs+='visibility : inherit;';
		hs+='width : 116px;';
		hs+='pointer-events:auto;';
		this._image_8.setAttribute('style',hs);
		this._image_8.style[domTransform + 'Origin']='50% 50%';
		me._image_8.ggIsActive=function() {
			if ((this.parentNode) && (this.parentNode.ggIsActive)) {
				return this.parentNode.ggIsActive();
			}
			return false;
		}
		me._image_8.ggElementNodeId=function() {
			if ((this.parentNode) && (this.parentNode.ggElementNodeId)) {
				return this.parentNode.ggElementNodeId();
			}
			return me.ggNodeId;
		}
		this._image_8.ggUpdatePosition=function (useTransition) {
		}
		this._green_walls2.appendChild(this._image_8);
		this._ht_caro.appendChild(this._green_walls2);
		this.__div = this._ht_caro;
	};
	function SkinHotspotClass_ht_products(skinObj,hotspot) {
		var me=this;
		var flag=false;
		var hs='';
		this.player=skinObj.player;
		this.skin=skinObj;
		this.hotspot=hotspot;
		var nodeId=String(hotspot.url);
		nodeId=(nodeId.charAt(0)=='{')?nodeId.substr(1, nodeId.length - 2):'';
		this.ggUserdata=this.skin.player.getNodeUserdata(nodeId);
		this.elementMouseDown=[];
		this.elementMouseOver=[];
		this.findElements=function(id,regex) {
			return me.skin.findElements(id,regex);
		}
		this._ht_products=document.createElement('div');
		this._ht_products.ggId="ht_products";
		this._ht_products.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1 };
		this._ht_products.ggVisible=true;
		this._ht_products.className="ggskin ggskin_hotspot ";
		this._ht_products.ggType='hotspot';
		hs ='';
		hs+='cursor : pointer;';
		hs+='height : 5px;';
		hs+='left : 30px;';
		hs+='position : absolute;';
		hs+='top : 102px;';
		hs+='visibility : inherit;';
		hs+='width : 5px;';
		hs+='pointer-events:auto;';
		this._ht_products.setAttribute('style',hs);
		this._ht_products.style[domTransform + 'Origin']='50% 50%';
		me._ht_products.ggIsActive=function() {
			return me.player.getCurrentNode()==this.ggElementNodeId();
		}
		me._ht_products.ggElementNodeId=function() {
			return me.hotspot.url.substr(1, me.hotspot.url.length - 2);
		}
		this._ht_products.onclick=function (e) {
			me.skin.hotspotProxyClick(me.hotspot.id);
		}
		this._ht_products.ondblclick=function (e) {
			me.skin.hotspotProxyDoubleClick(me.hotspot.id);
		}
		this._ht_products.onmouseover=function (e) {
			me.player.setActiveHotspot(me.hotspot);
			me.skin.hotspotProxyOver(me.hotspot.id);
		}
		this._ht_products.onmouseout=function (e) {
			me.player.setActiveHotspot(null);
			me.skin.hotspotProxyOut(me.hotspot.id);
		}
		this._ht_products.ggUpdatePosition=function (useTransition) {
		}
		this._green_walls1=document.createElement('div');
		this._green_walls1.ggId="Green walls";
		this._green_walls1.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1 };
		this._green_walls1.ggVisible=true;
		this._green_walls1.className="ggskin ggskin_container ";
		this._green_walls1.ggType='container';
		hs ='';
		hs+='height : 294px;';
		hs+='left : -36px;';
		hs+='position : absolute;';
		hs+='top : -44px;';
		hs+='visibility : inherit;';
		hs+='width : 387px;';
		hs+='pointer-events:none;';
		this._green_walls1.setAttribute('style',hs);
		this._green_walls1.style[domTransform + 'Origin']='0% 0%';
		me._green_walls1.ggIsActive=function() {
			if ((this.parentNode) && (this.parentNode.ggIsActive)) {
				return this.parentNode.ggIsActive();
			}
			return false;
		}
		me._green_walls1.ggElementNodeId=function() {
			if ((this.parentNode) && (this.parentNode.ggElementNodeId)) {
				return this.parentNode.ggElementNodeId();
			}
			return me.ggNodeId;
		}
		me._green_walls1.logicBlock_scaling = function() {
			var newLogicStateScaling;
			if (
				(me.player.getViewerSize().width < 720)
			)
			{
				newLogicStateScaling = 0;
			}
			else {
				newLogicStateScaling = -1;
			}
			if (me._green_walls1.ggCurrentLogicStateScaling != newLogicStateScaling) {
				me._green_walls1.ggCurrentLogicStateScaling = newLogicStateScaling;
				me._green_walls1.style[domTransition]='' + cssPrefix + 'transform 1000ms ease 0ms';
				if (me._green_walls1.ggCurrentLogicStateScaling == 0) {
					me._green_walls1.ggParameter.sx = 0.7;
					me._green_walls1.ggParameter.sy = 0.7;
					me._green_walls1.style[domTransform]=parameterToTransform(me._green_walls1.ggParameter);
				}
				else {
					me._green_walls1.ggParameter.sx = 1;
					me._green_walls1.ggParameter.sy = 1;
					me._green_walls1.style[domTransform]=parameterToTransform(me._green_walls1.ggParameter);
				}
			}
		}
		this._green_walls1.ggUpdatePosition=function (useTransition) {
		}
		this._svg_14=document.createElement('div');
		this._svg_14__img=document.createElement('img');
		this._svg_14__img.className='ggskin ggskin_svg';
		this._svg_14__img.setAttribute('src',basePath + 'images/svg_14.svg');
		this._svg_14__img.setAttribute('style','position: absolute;top: 0px;left: 0px;width: 100%;height: 100%;-webkit-user-drag:none;pointer-events:none;;');
		this._svg_14__img['ondragstart']=function() { return false; };
		this._svg_14.appendChild(this._svg_14__img);
		this._svg_14.ggId="Svg 1";
		this._svg_14.ggParameter={ rx:0,ry:0,a:45,sx:1,sy:1 };
		this._svg_14.ggVisible=true;
		this._svg_14.className="ggskin ggskin_svg ";
		this._svg_14.ggType='svg';
		hs ='';
		hs+='cursor : pointer;';
		hs+='height : 30px;';
		hs+='left : 22px;';
		hs+='position : absolute;';
		hs+='top : 31px;';
		hs+='visibility : inherit;';
		hs+='width : 30px;';
		hs+='pointer-events:auto;';
		this._svg_14.setAttribute('style',hs);
		this._svg_14.style[domTransform + 'Origin']='50% 50%';
		this._svg_14.style[domTransform]=parameterToTransform(this._svg_14.ggParameter);
		me._svg_14.ggIsActive=function() {
			if ((this.parentNode) && (this.parentNode.ggIsActive)) {
				return this.parentNode.ggIsActive();
			}
			return false;
		}
		me._svg_14.ggElementNodeId=function() {
			if ((this.parentNode) && (this.parentNode.ggElementNodeId)) {
				return this.parentNode.ggElementNodeId();
			}
			return me.ggNodeId;
		}
		me._svg_14.logicBlock_scaling = function() {
			var newLogicStateScaling;
			if (
				(me.player.getVariableValue('info') == true)
			)
			{
				newLogicStateScaling = 0;
			}
			else {
				newLogicStateScaling = -1;
			}
			if (me._svg_14.ggCurrentLogicStateScaling != newLogicStateScaling) {
				me._svg_14.ggCurrentLogicStateScaling = newLogicStateScaling;
				me._svg_14.style[domTransition]='' + cssPrefix + 'transform 500ms ease 0ms, ' + cssPrefix + 'transform 500ms ease 0ms';
				if (me._svg_14.ggCurrentLogicStateScaling == 0) {
					me._svg_14.ggParameter.sx = 0.8;
					me._svg_14.ggParameter.sy = 0.8;
					me._svg_14.style[domTransform]=parameterToTransform(me._svg_14.ggParameter);
				}
				else {
					me._svg_14.ggParameter.sx = 1;
					me._svg_14.ggParameter.sy = 1;
					me._svg_14.style[domTransform]=parameterToTransform(me._svg_14.ggParameter);
				}
			}
		}
		me._svg_14.logicBlock_angle = function() {
			var newLogicStateAngle;
			if (
				(me.player.getVariableValue('info') == true)
			)
			{
				newLogicStateAngle = 0;
			}
			else {
				newLogicStateAngle = -1;
			}
			if (me._svg_14.ggCurrentLogicStateAngle != newLogicStateAngle) {
				me._svg_14.ggCurrentLogicStateAngle = newLogicStateAngle;
				me._svg_14.style[domTransition]='' + cssPrefix + 'transform 500ms ease 0ms, ' + cssPrefix + 'transform 500ms ease 0ms';
				if (me._svg_14.ggCurrentLogicStateAngle == 0) {
					me._svg_14.ggParameter.a = 0;
					me._svg_14.style[domTransform]=parameterToTransform(me._svg_14.ggParameter);
				}
				else {
					me._svg_14.ggParameter.a = 45;
					me._svg_14.style[domTransform]=parameterToTransform(me._svg_14.ggParameter);
				}
			}
		}
		this._svg_14.onclick=function (e) {
			me.player.setVariableValue('products', !me.player.getVariableValue('products'));
		}
		this._svg_14.ggUpdatePosition=function (useTransition) {
		}
		this._green_walls1.appendChild(this._svg_14);
		this._more_info1=document.createElement('div');
		this._more_info1__text=document.createElement('div');
		this._more_info1.className='ggskin ggskin_textdiv';
		this._more_info1.ggTextDiv=this._more_info1__text;
		this._more_info1.ggId="more info";
		this._more_info1.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1 };
		this._more_info1.ggVisible=true;
		this._more_info1.className="ggskin ggskin_text ";
		this._more_info1.ggType='text';
		hs ='';
		hs+='cursor : pointer;';
		hs+='height : 25px;';
		hs+='left : 59px;';
		hs+='position : absolute;';
		hs+='top : 34px;';
		hs+='visibility : inherit;';
		hs+='width : 178px;';
		hs+='pointer-events:auto;';
		hs+='font-size: 18px;';
		this._more_info1.setAttribute('style',hs);
		this._more_info1.style[domTransform + 'Origin']='50% 50%';
		hs ='position:absolute;';
		hs+='left: 0px;';
		hs+='top:  0px;';
		hs+='width: auto;';
		hs+='height: auto;';
		hs+='background: #000000;';
		hs+='background: rgba(0,0,0,0.117647);';
		hs+='border: 0px solid #000000;';
		hs+='color: rgba(255,255,255,1);';
		hs+='text-align: left;';
		hs+='white-space: nowrap;';
		hs+='padding: 0px 1px 0px 1px;';
		hs+='overflow: hidden;';
		this._more_info1__text.setAttribute('style',hs);
		this._more_info1__text.innerHTML="OUR PRODUCTS";
		this._more_info1.appendChild(this._more_info1__text);
		me._more_info1.ggIsActive=function() {
			if ((this.parentNode) && (this.parentNode.ggIsActive)) {
				return this.parentNode.ggIsActive();
			}
			return false;
		}
		me._more_info1.ggElementNodeId=function() {
			if ((this.parentNode) && (this.parentNode.ggElementNodeId)) {
				return this.parentNode.ggElementNodeId();
			}
			return me.ggNodeId;
		}
		me._more_info1.logicBlock_alpha = function() {
			var newLogicStateAlpha;
			if (
				(me.player.getVariableValue('about') == true)
			)
			{
				newLogicStateAlpha = 0;
			}
			else {
				newLogicStateAlpha = -1;
			}
			if (me._more_info1.ggCurrentLogicStateAlpha != newLogicStateAlpha) {
				me._more_info1.ggCurrentLogicStateAlpha = newLogicStateAlpha;
				me._more_info1.style[domTransition]='opacity 500ms ease 0ms, visibility 500ms ease 0ms';
				if (me._more_info1.ggCurrentLogicStateAlpha == 0) {
					me._more_info1.style.visibility="hidden";
					me._more_info1.style.opacity=0;
				}
				else {
					me._more_info1.style.visibility=me._more_info1.ggVisible?'inherit':'hidden';
					me._more_info1.style.opacity=1;
				}
			}
		}
		this._more_info1.onclick=function (e) {
			me.player.setVariableValue('products', !me.player.getVariableValue('products'));
		}
		this._more_info1.ggUpdatePosition=function (useTransition) {
		}
		this._green_walls1.appendChild(this._more_info1);
		this._ht_products.appendChild(this._green_walls1);
		this.__div = this._ht_products;
	};
	function SkinHotspotClass_ht_example2(skinObj,hotspot) {
		var me=this;
		var flag=false;
		var hs='';
		this.player=skinObj.player;
		this.skin=skinObj;
		this.hotspot=hotspot;
		var nodeId=String(hotspot.url);
		nodeId=(nodeId.charAt(0)=='{')?nodeId.substr(1, nodeId.length - 2):'';
		this.ggUserdata=this.skin.player.getNodeUserdata(nodeId);
		this.elementMouseDown=[];
		this.elementMouseOver=[];
		this.findElements=function(id,regex) {
			return me.skin.findElements(id,regex);
		}
		this._ht_example2=document.createElement('div');
		this._ht_example2.ggId="ht_example2";
		this._ht_example2.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1 };
		this._ht_example2.ggVisible=true;
		this._ht_example2.className="ggskin ggskin_hotspot ";
		this._ht_example2.ggType='hotspot';
		hs ='';
		hs+='height : 5px;';
		hs+='left : 376px;';
		hs+='position : absolute;';
		hs+='top : 152px;';
		hs+='visibility : inherit;';
		hs+='width : 5px;';
		hs+='pointer-events:auto;';
		this._ht_example2.setAttribute('style',hs);
		this._ht_example2.style[domTransform + 'Origin']='50% 50%';
		me._ht_example2.ggIsActive=function() {
			return me.player.getCurrentNode()==this.ggElementNodeId();
		}
		me._ht_example2.ggElementNodeId=function() {
			return me.hotspot.url.substr(1, me.hotspot.url.length - 2);
		}
		this._ht_example2.onclick=function (e) {
			me.skin.hotspotProxyClick(me.hotspot.id);
		}
		this._ht_example2.ondblclick=function (e) {
			me.skin.hotspotProxyDoubleClick(me.hotspot.id);
		}
		this._ht_example2.onmouseover=function (e) {
			me.player.setActiveHotspot(me.hotspot);
			me.skin.hotspotProxyOver(me.hotspot.id);
		}
		this._ht_example2.onmouseout=function (e) {
			me.player.setActiveHotspot(null);
			me.skin.hotspotProxyOut(me.hotspot.id);
		}
		this._ht_example2.ggUpdatePosition=function (useTransition) {
		}
		this._green_walls0=document.createElement('div');
		this._green_walls0.ggId="Green walls";
		this._green_walls0.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1 };
		this._green_walls0.ggVisible=true;
		this._green_walls0.className="ggskin ggskin_container ";
		this._green_walls0.ggType='container';
		hs ='';
		hs+='height : 294px;';
		hs+='left : -313px;';
		hs+='position : absolute;';
		hs+='top : -3px;';
		hs+='visibility : inherit;';
		hs+='width : 387px;';
		hs+='pointer-events:none;';
		this._green_walls0.setAttribute('style',hs);
		this._green_walls0.style[domTransform + 'Origin']='0% 0%';
		me._green_walls0.ggIsActive=function() {
			if ((this.parentNode) && (this.parentNode.ggIsActive)) {
				return this.parentNode.ggIsActive();
			}
			return false;
		}
		me._green_walls0.ggElementNodeId=function() {
			if ((this.parentNode) && (this.parentNode.ggElementNodeId)) {
				return this.parentNode.ggElementNodeId();
			}
			return me.ggNodeId;
		}
		me._green_walls0.logicBlock_scaling = function() {
			var newLogicStateScaling;
			if (
				(me.player.getViewerSize().width < 720)
			)
			{
				newLogicStateScaling = 0;
			}
			else {
				newLogicStateScaling = -1;
			}
			if (me._green_walls0.ggCurrentLogicStateScaling != newLogicStateScaling) {
				me._green_walls0.ggCurrentLogicStateScaling = newLogicStateScaling;
				me._green_walls0.style[domTransition]='' + cssPrefix + 'transform 1000ms ease 0ms';
				if (me._green_walls0.ggCurrentLogicStateScaling == 0) {
					me._green_walls0.ggParameter.sx = 0.7;
					me._green_walls0.ggParameter.sy = 0.7;
					me._green_walls0.style[domTransform]=parameterToTransform(me._green_walls0.ggParameter);
				}
				else {
					me._green_walls0.ggParameter.sx = 1;
					me._green_walls0.ggParameter.sy = 1;
					me._green_walls0.style[domTransform]=parameterToTransform(me._green_walls0.ggParameter);
				}
			}
		}
		this._green_walls0.ggUpdatePosition=function (useTransition) {
		}
		this._rectangle_40=document.createElement('div');
		this._rectangle_40.ggId="Rectangle 4";
		this._rectangle_40.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1 };
		this._rectangle_40.ggVisible=true;
		this._rectangle_40.className="ggskin ggskin_rectangle ";
		this._rectangle_40.ggType='rectangle';
		hs ='';
		hs+='background : #ffffff;';
		hs+='border : 0px solid #000000;';
		hs+='cursor : default;';
		hs+='height : 250px;';
		hs+='left : 35px;';
		hs+='position : absolute;';
		hs+='top : 59px;';
		hs+='visibility : inherit;';
		hs+='width : 3px;';
		hs+='pointer-events:auto;';
		this._rectangle_40.setAttribute('style',hs);
		this._rectangle_40.style[domTransform + 'Origin']='50% 50%';
		me._rectangle_40.ggIsActive=function() {
			if ((this.parentNode) && (this.parentNode.ggIsActive)) {
				return this.parentNode.ggIsActive();
			}
			return false;
		}
		me._rectangle_40.ggElementNodeId=function() {
			if ((this.parentNode) && (this.parentNode.ggElementNodeId)) {
				return this.parentNode.ggElementNodeId();
			}
			return me.ggNodeId;
		}
		me._rectangle_40.logicBlock_size = function() {
			var newLogicStateSize;
			if (
				(me.player.getVariableValue('info') == true)
			)
			{
				newLogicStateSize = 0;
			}
			else if (
				(me.player.getVariableValue('info') == false)
			)
			{
				newLogicStateSize = 1;
			}
			else {
				newLogicStateSize = -1;
			}
			if (me._rectangle_40.ggCurrentLogicStateSize != newLogicStateSize) {
				me._rectangle_40.ggCurrentLogicStateSize = newLogicStateSize;
				me._rectangle_40.style[domTransition]='width 500ms ease 0ms, height 500ms ease 0ms';
				if (me._rectangle_40.ggCurrentLogicStateSize == 0) {
					me._rectangle_40.style.width='3px';
					me._rectangle_40.style.height='260px';
					me.skin.updateSize(me._rectangle_40);
				}
				else if (me._rectangle_40.ggCurrentLogicStateSize == 1) {
					me._rectangle_40.style.width='3px';
					me._rectangle_40.style.height='3px';
					me.skin.updateSize(me._rectangle_40);
				}
				else {
					me._rectangle_40.style.width='3px';
					me._rectangle_40.style.height='250px';
					me.skin.updateSize(me._rectangle_40);
				}
			}
		}
		this._rectangle_40.ggUpdatePosition=function (useTransition) {
		}
		this._green_walls0.appendChild(this._rectangle_40);
		this._rectangle_50=document.createElement('div');
		this._rectangle_50.ggId="Rectangle 5";
		this._rectangle_50.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1 };
		this._rectangle_50.ggVisible=true;
		this._rectangle_50.className="ggskin ggskin_rectangle ";
		this._rectangle_50.ggType='rectangle';
		hs ='';
		hs+='background : rgba(255,255,255,0.745098);';
		hs+='border : 0px solid #000000;';
		hs+='cursor : pointer;';
		hs+='height : 1px;';
		hs+='left : 42px;';
		hs+='opacity : 0;';
		hs+='position : absolute;';
		hs+='top : 60px;';
		hs+='visibility : hidden;';
		hs+='width : 1px;';
		hs+='pointer-events:auto;';
		this._rectangle_50.setAttribute('style',hs);
		this._rectangle_50.style[domTransform + 'Origin']='50% 50%';
		me._rectangle_50.ggIsActive=function() {
			if ((this.parentNode) && (this.parentNode.ggIsActive)) {
				return this.parentNode.ggIsActive();
			}
			return false;
		}
		me._rectangle_50.ggElementNodeId=function() {
			if ((this.parentNode) && (this.parentNode.ggElementNodeId)) {
				return this.parentNode.ggElementNodeId();
			}
			return me.ggNodeId;
		}
		me._rectangle_50.logicBlock_size = function() {
			var newLogicStateSize;
			if (
				(me.player.getVariableValue('info') == true)
			)
			{
				newLogicStateSize = 0;
			}
			else {
				newLogicStateSize = -1;
			}
			if (me._rectangle_50.ggCurrentLogicStateSize != newLogicStateSize) {
				me._rectangle_50.ggCurrentLogicStateSize = newLogicStateSize;
				me._rectangle_50.style[domTransition]='width 500ms ease 0ms, height 500ms ease 0ms, opacity 500ms ease 0ms, visibility 500ms ease 0ms';
				if (me._rectangle_50.ggCurrentLogicStateSize == 0) {
					me._rectangle_50.style.width='350px';
					me._rectangle_50.style.height='270px';
					me.skin.updateSize(me._rectangle_50);
				}
				else {
					me._rectangle_50.style.width='1px';
					me._rectangle_50.style.height='1px';
					me.skin.updateSize(me._rectangle_50);
				}
			}
		}
		me._rectangle_50.logicBlock_alpha = function() {
			var newLogicStateAlpha;
			if (
				(me.player.getVariableValue('info') == true)
			)
			{
				newLogicStateAlpha = 0;
			}
			else {
				newLogicStateAlpha = -1;
			}
			if (me._rectangle_50.ggCurrentLogicStateAlpha != newLogicStateAlpha) {
				me._rectangle_50.ggCurrentLogicStateAlpha = newLogicStateAlpha;
				me._rectangle_50.style[domTransition]='width 500ms ease 0ms, height 500ms ease 0ms, opacity 500ms ease 0ms, visibility 500ms ease 0ms';
				if (me._rectangle_50.ggCurrentLogicStateAlpha == 0) {
					me._rectangle_50.style.visibility=me._rectangle_50.ggVisible?'inherit':'hidden';
					me._rectangle_50.style.opacity=1;
				}
				else {
					me._rectangle_50.style.visibility="hidden";
					me._rectangle_50.style.opacity=0;
				}
			}
		}
		this._rectangle_50.onclick=function (e) {
			me.player.setVariableValue('info', !me.player.getVariableValue('info'));
		}
		this._rectangle_50.ggUpdatePosition=function (useTransition) {
		}
		this._text_20=document.createElement('div');
		this._text_20__text=document.createElement('div');
		this._text_20.className='ggskin ggskin_textdiv';
		this._text_20.ggTextDiv=this._text_20__text;
		this._text_20.ggId="Text 2";
		this._text_20.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1 };
		this._text_20.ggVisible=true;
		this._text_20.className="ggskin ggskin_text ";
		this._text_20.ggType='text';
		hs ='';
		hs+='cursor : pointer;';
		hs+='height : 250px;';
		hs+='left : 21px;';
		hs+='position : absolute;';
		hs+='top : 9px;';
		hs+='visibility : inherit;';
		hs+='width : 300px;';
		hs+='pointer-events:auto;';
		hs+='font-size: 17px;';
		this._text_20.setAttribute('style',hs);
		this._text_20.style[domTransform + 'Origin']='50% 50%';
		hs ='position:absolute;';
		hs+='left: 0px;';
		hs+='top:  0px;';
		hs+='width: 300px;';
		hs+='height: 250px;';
		hs+='border: 0px solid #000000;';
		hs+='color: rgba(57,57,57,1);';
		hs+='text-align: left;';
		hs+='white-space: pre-wrap;';
		hs+='padding: 0px 1px 0px 1px;';
		hs+='overflow: hidden;';
		hs+='overflow-y: auto;';
		this._text_20__text.setAttribute('style',hs);
		this._text_20__text.innerHTML="Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo cons\"";
		this._text_20.appendChild(this._text_20__text);
		me._text_20.ggIsActive=function() {
			if ((this.parentNode) && (this.parentNode.ggIsActive)) {
				return this.parentNode.ggIsActive();
			}
			return false;
		}
		me._text_20.ggElementNodeId=function() {
			if ((this.parentNode) && (this.parentNode.ggElementNodeId)) {
				return this.parentNode.ggElementNodeId();
			}
			return me.ggNodeId;
		}
		this._text_20.ggUpdatePosition=function (useTransition) {
		}
		this._rectangle_50.appendChild(this._text_20);
		this._green_walls0.appendChild(this._rectangle_50);
		this._svg_10=document.createElement('div');
		this._svg_10__img=document.createElement('img');
		this._svg_10__img.className='ggskin ggskin_svg';
		this._svg_10__img.setAttribute('src',basePath + 'images/svg_10.svg');
		this._svg_10__img.setAttribute('style','position: absolute;top: 0px;left: 0px;width: 100%;height: 100%;-webkit-user-drag:none;pointer-events:none;;');
		this._svg_10__img['ondragstart']=function() { return false; };
		this._svg_10.appendChild(this._svg_10__img);
		this._svg_10.ggId="Svg 1";
		this._svg_10.ggParameter={ rx:0,ry:0,a:45,sx:1,sy:1 };
		this._svg_10.ggVisible=true;
		this._svg_10.className="ggskin ggskin_svg ";
		this._svg_10.ggType='svg';
		hs ='';
		hs+='cursor : pointer;';
		hs+='height : 30px;';
		hs+='left : 22px;';
		hs+='position : absolute;';
		hs+='top : 31px;';
		hs+='visibility : inherit;';
		hs+='width : 30px;';
		hs+='pointer-events:auto;';
		this._svg_10.setAttribute('style',hs);
		this._svg_10.style[domTransform + 'Origin']='50% 50%';
		this._svg_10.style[domTransform]=parameterToTransform(this._svg_10.ggParameter);
		me._svg_10.ggIsActive=function() {
			if ((this.parentNode) && (this.parentNode.ggIsActive)) {
				return this.parentNode.ggIsActive();
			}
			return false;
		}
		me._svg_10.ggElementNodeId=function() {
			if ((this.parentNode) && (this.parentNode.ggElementNodeId)) {
				return this.parentNode.ggElementNodeId();
			}
			return me.ggNodeId;
		}
		me._svg_10.logicBlock_scaling = function() {
			var newLogicStateScaling;
			if (
				(me.player.getVariableValue('info') == true)
			)
			{
				newLogicStateScaling = 0;
			}
			else {
				newLogicStateScaling = -1;
			}
			if (me._svg_10.ggCurrentLogicStateScaling != newLogicStateScaling) {
				me._svg_10.ggCurrentLogicStateScaling = newLogicStateScaling;
				me._svg_10.style[domTransition]='' + cssPrefix + 'transform 500ms ease 0ms, ' + cssPrefix + 'transform 500ms ease 0ms';
				if (me._svg_10.ggCurrentLogicStateScaling == 0) {
					me._svg_10.ggParameter.sx = 0.8;
					me._svg_10.ggParameter.sy = 0.8;
					me._svg_10.style[domTransform]=parameterToTransform(me._svg_10.ggParameter);
				}
				else {
					me._svg_10.ggParameter.sx = 1;
					me._svg_10.ggParameter.sy = 1;
					me._svg_10.style[domTransform]=parameterToTransform(me._svg_10.ggParameter);
				}
			}
		}
		me._svg_10.logicBlock_angle = function() {
			var newLogicStateAngle;
			if (
				(me.player.getVariableValue('info') == true)
			)
			{
				newLogicStateAngle = 0;
			}
			else {
				newLogicStateAngle = -1;
			}
			if (me._svg_10.ggCurrentLogicStateAngle != newLogicStateAngle) {
				me._svg_10.ggCurrentLogicStateAngle = newLogicStateAngle;
				me._svg_10.style[domTransition]='' + cssPrefix + 'transform 500ms ease 0ms, ' + cssPrefix + 'transform 500ms ease 0ms';
				if (me._svg_10.ggCurrentLogicStateAngle == 0) {
					me._svg_10.ggParameter.a = 0;
					me._svg_10.style[domTransform]=parameterToTransform(me._svg_10.ggParameter);
				}
				else {
					me._svg_10.ggParameter.a = 45;
					me._svg_10.style[domTransform]=parameterToTransform(me._svg_10.ggParameter);
				}
			}
		}
		this._svg_10.onclick=function (e) {
			me.player.setVariableValue('info', !me.player.getVariableValue('info'));
		}
		this._svg_10.ggUpdatePosition=function (useTransition) {
		}
		this._green_walls0.appendChild(this._svg_10);
		this._rectangle_90=document.createElement('div');
		this._rectangle_90.ggId="Rectangle 9";
		this._rectangle_90.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1 };
		this._rectangle_90.ggVisible=true;
		this._rectangle_90.className="ggskin ggskin_rectangle ";
		this._rectangle_90.ggType='rectangle';
		hs ='';
		hs+='background : rgba(0,0,0,0.313725);';
		hs+='border : 0px solid #000000;';
		hs+='cursor : pointer;';
		hs+='height : 25px;';
		hs+='left : 58px;';
		hs+='position : absolute;';
		hs+='top : 33px;';
		hs+='visibility : inherit;';
		hs+='width : 179px;';
		hs+='pointer-events:auto;';
		this._rectangle_90.setAttribute('style',hs);
		this._rectangle_90.style[domTransform + 'Origin']='50% 50%';
		me._rectangle_90.ggIsActive=function() {
			if ((this.parentNode) && (this.parentNode.ggIsActive)) {
				return this.parentNode.ggIsActive();
			}
			return false;
		}
		me._rectangle_90.ggElementNodeId=function() {
			if ((this.parentNode) && (this.parentNode.ggElementNodeId)) {
				return this.parentNode.ggElementNodeId();
			}
			return me.ggNodeId;
		}
		this._rectangle_90.onclick=function (e) {
			me.player.setVariableValue('info', !me.player.getVariableValue('info'));
		}
		this._rectangle_90.ggUpdatePosition=function (useTransition) {
		}
		this._green_walls0.appendChild(this._rectangle_90);
		this._more_info0=document.createElement('div');
		this._more_info0__text=document.createElement('div');
		this._more_info0.className='ggskin ggskin_textdiv';
		this._more_info0.ggTextDiv=this._more_info0__text;
		this._more_info0.ggId="more info";
		this._more_info0.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1 };
		this._more_info0.ggVisible=true;
		this._more_info0.className="ggskin ggskin_text ";
		this._more_info0.ggType='text';
		hs ='';
		hs+='cursor : pointer;';
		hs+='height : 25px;';
		hs+='left : 59px;';
		hs+='position : absolute;';
		hs+='top : 34px;';
		hs+='visibility : inherit;';
		hs+='width : 178px;';
		hs+='pointer-events:auto;';
		hs+='font-size: 18px;';
		this._more_info0.setAttribute('style',hs);
		this._more_info0.style[domTransform + 'Origin']='50% 50%';
		hs ='position:absolute;';
		hs+='left: 0px;';
		hs+='top:  0px;';
		hs+='width: auto;';
		hs+='height: auto;';
		hs+='background: #000000;';
		hs+='background: rgba(0,0,0,0.117647);';
		hs+='border: 0px solid #000000;';
		hs+='color: rgba(255,255,255,1);';
		hs+='text-align: left;';
		hs+='white-space: nowrap;';
		hs+='padding: 0px 1px 0px 1px;';
		hs+='overflow: hidden;';
		this._more_info0__text.setAttribute('style',hs);
		this._more_info0__text.innerHTML="MORE INFO";
		this._more_info0.appendChild(this._more_info0__text);
		me._more_info0.ggIsActive=function() {
			if ((this.parentNode) && (this.parentNode.ggIsActive)) {
				return this.parentNode.ggIsActive();
			}
			return false;
		}
		me._more_info0.ggElementNodeId=function() {
			if ((this.parentNode) && (this.parentNode.ggElementNodeId)) {
				return this.parentNode.ggElementNodeId();
			}
			return me.ggNodeId;
		}
		me._more_info0.logicBlock_position = function() {
			var newLogicStatePosition;
			if (
				(me.player.getVariableValue('info') == true)
			)
			{
				newLogicStatePosition = 0;
			}
			else {
				newLogicStatePosition = -1;
			}
			if (me._more_info0.ggCurrentLogicStatePosition != newLogicStatePosition) {
				me._more_info0.ggCurrentLogicStatePosition = newLogicStatePosition;
				me._more_info0.style[domTransition]='left 500ms ease 0ms, top 500ms ease 0ms, opacity 500ms ease 0ms, visibility 500ms ease 0ms';
				if (me._more_info0.ggCurrentLogicStatePosition == 0) {
					me._more_info0.style.left='15px';
					me._more_info0.style.top='34px';
				}
				else {
					me._more_info0.style.left='59px';
					me._more_info0.style.top='34px';
				}
			}
		}
		me._more_info0.logicBlock_alpha = function() {
			var newLogicStateAlpha;
			if (
				(me.player.getVariableValue('info') == true)
			)
			{
				newLogicStateAlpha = 0;
			}
			else {
				newLogicStateAlpha = -1;
			}
			if (me._more_info0.ggCurrentLogicStateAlpha != newLogicStateAlpha) {
				me._more_info0.ggCurrentLogicStateAlpha = newLogicStateAlpha;
				me._more_info0.style[domTransition]='left 500ms ease 0ms, top 500ms ease 0ms, opacity 500ms ease 0ms, visibility 500ms ease 0ms';
				if (me._more_info0.ggCurrentLogicStateAlpha == 0) {
					me._more_info0.style.visibility="hidden";
					me._more_info0.style.opacity=0;
				}
				else {
					me._more_info0.style.visibility=me._more_info0.ggVisible?'inherit':'hidden';
					me._more_info0.style.opacity=1;
				}
			}
		}
		this._more_info0.onclick=function (e) {
			me.player.setVariableValue('info', !me.player.getVariableValue('info'));
		}
		this._more_info0.ggUpdatePosition=function (useTransition) {
		}
		this._green_walls0.appendChild(this._more_info0);
		this._close0=document.createElement('div');
		this._close0__text=document.createElement('div');
		this._close0.className='ggskin ggskin_textdiv';
		this._close0.ggTextDiv=this._close0__text;
		this._close0.ggId="close";
		this._close0.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1 };
		this._close0.ggVisible=true;
		this._close0.className="ggskin ggskin_text ";
		this._close0.ggType='text';
		hs ='';
		hs+='cursor : pointer;';
		hs+='height : 25px;';
		hs+='left : 59px;';
		hs+='position : absolute;';
		hs+='top : 34px;';
		hs+='visibility : inherit;';
		hs+='width : 178px;';
		hs+='pointer-events:auto;';
		hs+='font-size: 18px;';
		this._close0.setAttribute('style',hs);
		this._close0.style[domTransform + 'Origin']='50% 50%';
		hs ='position:absolute;';
		hs+='left: 0px;';
		hs+='top:  0px;';
		hs+='width: auto;';
		hs+='height: auto;';
		hs+='background: #000000;';
		hs+='background: rgba(0,0,0,0.117647);';
		hs+='border: 0px solid #000000;';
		hs+='color: rgba(255,255,255,1);';
		hs+='text-align: left;';
		hs+='white-space: nowrap;';
		hs+='padding: 0px 1px 0px 1px;';
		hs+='overflow: hidden;';
		this._close0__text.setAttribute('style',hs);
		this._close0__text.innerHTML="CLOSE";
		this._close0.appendChild(this._close0__text);
		me._close0.ggIsActive=function() {
			if ((this.parentNode) && (this.parentNode.ggIsActive)) {
				return this.parentNode.ggIsActive();
			}
			return false;
		}
		me._close0.ggElementNodeId=function() {
			if ((this.parentNode) && (this.parentNode.ggElementNodeId)) {
				return this.parentNode.ggElementNodeId();
			}
			return me.ggNodeId;
		}
		me._close0.logicBlock_position = function() {
			var newLogicStatePosition;
			if (
				(me.player.getVariableValue('info') == false)
			)
			{
				newLogicStatePosition = 0;
			}
			else {
				newLogicStatePosition = -1;
			}
			if (me._close0.ggCurrentLogicStatePosition != newLogicStatePosition) {
				me._close0.ggCurrentLogicStatePosition = newLogicStatePosition;
				me._close0.style[domTransition]='left 500ms ease 0ms, top 500ms ease 0ms, opacity 500ms ease 0ms, visibility 500ms ease 0ms';
				if (me._close0.ggCurrentLogicStatePosition == 0) {
					me._close0.style.left='15px';
					me._close0.style.top='34px';
				}
				else {
					me._close0.style.left='59px';
					me._close0.style.top='34px';
				}
			}
		}
		me._close0.logicBlock_alpha = function() {
			var newLogicStateAlpha;
			if (
				(me.player.getVariableValue('info') == false)
			)
			{
				newLogicStateAlpha = 0;
			}
			else {
				newLogicStateAlpha = -1;
			}
			if (me._close0.ggCurrentLogicStateAlpha != newLogicStateAlpha) {
				me._close0.ggCurrentLogicStateAlpha = newLogicStateAlpha;
				me._close0.style[domTransition]='left 500ms ease 0ms, top 500ms ease 0ms, opacity 500ms ease 0ms, visibility 500ms ease 0ms';
				if (me._close0.ggCurrentLogicStateAlpha == 0) {
					me._close0.style.visibility="hidden";
					me._close0.style.opacity=0;
				}
				else {
					me._close0.style.visibility=me._close0.ggVisible?'inherit':'hidden';
					me._close0.style.opacity=1;
				}
			}
		}
		this._close0.onclick=function (e) {
			me.player.setVariableValue('info', !me.player.getVariableValue('info'));
		}
		this._close0.ggUpdatePosition=function (useTransition) {
		}
		this._green_walls0.appendChild(this._close0);
		this._ht_example2.appendChild(this._green_walls0);
		this._text_40=document.createElement('div');
		this._text_40__text=document.createElement('div');
		this._text_40.className='ggskin ggskin_textdiv';
		this._text_40.ggTextDiv=this._text_40__text;
		this._text_40.ggId="Text 4";
		this._text_40.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1 };
		this._text_40.ggVisible=true;
		this._text_40.className="ggskin ggskin_text ";
		this._text_40.ggType='text';
		hs ='';
		hs+='height : 23px;';
		hs+='left : -272px;';
		hs+='position : absolute;';
		hs+='top : 0px;';
		hs+='visibility : inherit;';
		hs+='width : 272px;';
		hs+='pointer-events:auto;';
		this._text_40.setAttribute('style',hs);
		this._text_40.style[domTransform + 'Origin']='50% 50%';
		hs ='position:absolute;';
		hs+='cursor: default;';
		hs+='left: 0px;';
		hs+='top:  0px;';
		hs+='width: 272px;';
		hs+='height: 23px;';
		hs+='background: #ffffff;';
		hs+='border: 0px solid #000000;';
		hs+='color: #000000;';
		hs+='text-align: left;';
		hs+='white-space: nowrap;';
		hs+='padding: 0px 1px 0px 1px;';
		hs+='overflow: hidden;';
		this._text_40__text.setAttribute('style',hs);
		this._text_40__text.innerHTML="LIVING";
		this._text_40.appendChild(this._text_40__text);
		me._text_40.ggIsActive=function() {
			if ((this.parentNode) && (this.parentNode.ggIsActive)) {
				return this.parentNode.ggIsActive();
			}
			return false;
		}
		me._text_40.ggElementNodeId=function() {
			if ((this.parentNode) && (this.parentNode.ggElementNodeId)) {
				return this.parentNode.ggElementNodeId();
			}
			return me.ggNodeId;
		}
		this._text_40.ggUpdatePosition=function (useTransition) {
		}
		this._ht_example2.appendChild(this._text_40);
		this.__div = this._ht_example2;
	};
	function SkinHotspotClass_ht_example3(skinObj,hotspot) {
		var me=this;
		var flag=false;
		var hs='';
		this.player=skinObj.player;
		this.skin=skinObj;
		this.hotspot=hotspot;
		var nodeId=String(hotspot.url);
		nodeId=(nodeId.charAt(0)=='{')?nodeId.substr(1, nodeId.length - 2):'';
		this.ggUserdata=this.skin.player.getNodeUserdata(nodeId);
		this.elementMouseDown=[];
		this.elementMouseOver=[];
		this.findElements=function(id,regex) {
			return me.skin.findElements(id,regex);
		}
		this._ht_example3=document.createElement('div');
		this._ht_example3.ggId="ht_example3";
		this._ht_example3.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1 };
		this._ht_example3.ggVisible=true;
		this._ht_example3.className="ggskin ggskin_hotspot ";
		this._ht_example3.ggType='hotspot';
		hs ='';
		hs+='height : 5px;';
		hs+='left : 30px;';
		hs+='position : absolute;';
		hs+='top : 102px;';
		hs+='visibility : inherit;';
		hs+='width : 5px;';
		hs+='pointer-events:auto;';
		this._ht_example3.setAttribute('style',hs);
		this._ht_example3.style[domTransform + 'Origin']='50% 50%';
		me._ht_example3.ggIsActive=function() {
			return me.player.getCurrentNode()==this.ggElementNodeId();
		}
		me._ht_example3.ggElementNodeId=function() {
			return me.hotspot.url.substr(1, me.hotspot.url.length - 2);
		}
		this._ht_example3.onclick=function (e) {
			me.skin.hotspotProxyClick(me.hotspot.id);
		}
		this._ht_example3.ondblclick=function (e) {
			me.skin.hotspotProxyDoubleClick(me.hotspot.id);
		}
		this._ht_example3.onmouseover=function (e) {
			me.player.setActiveHotspot(me.hotspot);
			me.skin.hotspotProxyOver(me.hotspot.id);
		}
		this._ht_example3.onmouseout=function (e) {
			me.player.setActiveHotspot(null);
			me.skin.hotspotProxyOut(me.hotspot.id);
		}
		this._ht_example3.ggUpdatePosition=function (useTransition) {
		}
		this._green_walls=document.createElement('div');
		this._green_walls.ggId="Green walls";
		this._green_walls.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1 };
		this._green_walls.ggVisible=true;
		this._green_walls.className="ggskin ggskin_container ";
		this._green_walls.ggType='container';
		hs ='';
		hs+='height : 294px;';
		hs+='left : -15px;';
		hs+='position : absolute;';
		hs+='top : -3px;';
		hs+='visibility : inherit;';
		hs+='width : 387px;';
		hs+='pointer-events:none;';
		this._green_walls.setAttribute('style',hs);
		this._green_walls.style[domTransform + 'Origin']='0% 0%';
		me._green_walls.ggIsActive=function() {
			if ((this.parentNode) && (this.parentNode.ggIsActive)) {
				return this.parentNode.ggIsActive();
			}
			return false;
		}
		me._green_walls.ggElementNodeId=function() {
			if ((this.parentNode) && (this.parentNode.ggElementNodeId)) {
				return this.parentNode.ggElementNodeId();
			}
			return me.ggNodeId;
		}
		me._green_walls.logicBlock_scaling = function() {
			var newLogicStateScaling;
			if (
				(me.player.getViewerSize().width < 720)
			)
			{
				newLogicStateScaling = 0;
			}
			else {
				newLogicStateScaling = -1;
			}
			if (me._green_walls.ggCurrentLogicStateScaling != newLogicStateScaling) {
				me._green_walls.ggCurrentLogicStateScaling = newLogicStateScaling;
				me._green_walls.style[domTransition]='' + cssPrefix + 'transform 1000ms ease 0ms';
				if (me._green_walls.ggCurrentLogicStateScaling == 0) {
					me._green_walls.ggParameter.sx = 0.7;
					me._green_walls.ggParameter.sy = 0.7;
					me._green_walls.style[domTransform]=parameterToTransform(me._green_walls.ggParameter);
				}
				else {
					me._green_walls.ggParameter.sx = 1;
					me._green_walls.ggParameter.sy = 1;
					me._green_walls.style[domTransform]=parameterToTransform(me._green_walls.ggParameter);
				}
			}
		}
		this._green_walls.ggUpdatePosition=function (useTransition) {
		}
		this._rectangle_4=document.createElement('div');
		this._rectangle_4.ggId="Rectangle 4";
		this._rectangle_4.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1 };
		this._rectangle_4.ggVisible=true;
		this._rectangle_4.className="ggskin ggskin_rectangle ";
		this._rectangle_4.ggType='rectangle';
		hs ='';
		hs+='background : #ffffff;';
		hs+='border : 0px solid #000000;';
		hs+='cursor : default;';
		hs+='height : 250px;';
		hs+='left : 35px;';
		hs+='position : absolute;';
		hs+='top : 59px;';
		hs+='visibility : inherit;';
		hs+='width : 3px;';
		hs+='pointer-events:auto;';
		this._rectangle_4.setAttribute('style',hs);
		this._rectangle_4.style[domTransform + 'Origin']='50% 50%';
		me._rectangle_4.ggIsActive=function() {
			if ((this.parentNode) && (this.parentNode.ggIsActive)) {
				return this.parentNode.ggIsActive();
			}
			return false;
		}
		me._rectangle_4.ggElementNodeId=function() {
			if ((this.parentNode) && (this.parentNode.ggElementNodeId)) {
				return this.parentNode.ggElementNodeId();
			}
			return me.ggNodeId;
		}
		me._rectangle_4.logicBlock_size = function() {
			var newLogicStateSize;
			if (
				(me.player.getVariableValue('info') == true)
			)
			{
				newLogicStateSize = 0;
			}
			else if (
				(me.player.getVariableValue('info') == false)
			)
			{
				newLogicStateSize = 1;
			}
			else {
				newLogicStateSize = -1;
			}
			if (me._rectangle_4.ggCurrentLogicStateSize != newLogicStateSize) {
				me._rectangle_4.ggCurrentLogicStateSize = newLogicStateSize;
				me._rectangle_4.style[domTransition]='width 500ms ease 0ms, height 500ms ease 0ms';
				if (me._rectangle_4.ggCurrentLogicStateSize == 0) {
					me._rectangle_4.style.width='3px';
					me._rectangle_4.style.height='260px';
					me.skin.updateSize(me._rectangle_4);
				}
				else if (me._rectangle_4.ggCurrentLogicStateSize == 1) {
					me._rectangle_4.style.width='3px';
					me._rectangle_4.style.height='3px';
					me.skin.updateSize(me._rectangle_4);
				}
				else {
					me._rectangle_4.style.width='3px';
					me._rectangle_4.style.height='250px';
					me.skin.updateSize(me._rectangle_4);
				}
			}
		}
		this._rectangle_4.ggUpdatePosition=function (useTransition) {
		}
		this._green_walls.appendChild(this._rectangle_4);
		this._rectangle_5=document.createElement('div');
		this._rectangle_5.ggId="Rectangle 5";
		this._rectangle_5.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1 };
		this._rectangle_5.ggVisible=true;
		this._rectangle_5.className="ggskin ggskin_rectangle ";
		this._rectangle_5.ggType='rectangle';
		hs ='';
		hs+='background : rgba(255,255,255,0.745098);';
		hs+='border : 0px solid #000000;';
		hs+='cursor : pointer;';
		hs+='height : 1px;';
		hs+='left : 42px;';
		hs+='opacity : 0;';
		hs+='position : absolute;';
		hs+='top : 60px;';
		hs+='visibility : hidden;';
		hs+='width : 1px;';
		hs+='pointer-events:auto;';
		this._rectangle_5.setAttribute('style',hs);
		this._rectangle_5.style[domTransform + 'Origin']='50% 50%';
		me._rectangle_5.ggIsActive=function() {
			if ((this.parentNode) && (this.parentNode.ggIsActive)) {
				return this.parentNode.ggIsActive();
			}
			return false;
		}
		me._rectangle_5.ggElementNodeId=function() {
			if ((this.parentNode) && (this.parentNode.ggElementNodeId)) {
				return this.parentNode.ggElementNodeId();
			}
			return me.ggNodeId;
		}
		me._rectangle_5.logicBlock_size = function() {
			var newLogicStateSize;
			if (
				(me.player.getVariableValue('info') == true)
			)
			{
				newLogicStateSize = 0;
			}
			else {
				newLogicStateSize = -1;
			}
			if (me._rectangle_5.ggCurrentLogicStateSize != newLogicStateSize) {
				me._rectangle_5.ggCurrentLogicStateSize = newLogicStateSize;
				me._rectangle_5.style[domTransition]='width 500ms ease 0ms, height 500ms ease 0ms, opacity 500ms ease 0ms, visibility 500ms ease 0ms';
				if (me._rectangle_5.ggCurrentLogicStateSize == 0) {
					me._rectangle_5.style.width='350px';
					me._rectangle_5.style.height='270px';
					me.skin.updateSize(me._rectangle_5);
				}
				else {
					me._rectangle_5.style.width='1px';
					me._rectangle_5.style.height='1px';
					me.skin.updateSize(me._rectangle_5);
				}
			}
		}
		me._rectangle_5.logicBlock_alpha = function() {
			var newLogicStateAlpha;
			if (
				(me.player.getVariableValue('info') == true)
			)
			{
				newLogicStateAlpha = 0;
			}
			else {
				newLogicStateAlpha = -1;
			}
			if (me._rectangle_5.ggCurrentLogicStateAlpha != newLogicStateAlpha) {
				me._rectangle_5.ggCurrentLogicStateAlpha = newLogicStateAlpha;
				me._rectangle_5.style[domTransition]='width 500ms ease 0ms, height 500ms ease 0ms, opacity 500ms ease 0ms, visibility 500ms ease 0ms';
				if (me._rectangle_5.ggCurrentLogicStateAlpha == 0) {
					me._rectangle_5.style.visibility=me._rectangle_5.ggVisible?'inherit':'hidden';
					me._rectangle_5.style.opacity=1;
				}
				else {
					me._rectangle_5.style.visibility="hidden";
					me._rectangle_5.style.opacity=0;
				}
			}
		}
		this._rectangle_5.onclick=function (e) {
			me.player.setVariableValue('info', !me.player.getVariableValue('info'));
		}
		this._rectangle_5.ggUpdatePosition=function (useTransition) {
		}
		this._text_2=document.createElement('div');
		this._text_2__text=document.createElement('div');
		this._text_2.className='ggskin ggskin_textdiv';
		this._text_2.ggTextDiv=this._text_2__text;
		this._text_2.ggId="Text 2";
		this._text_2.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1 };
		this._text_2.ggVisible=true;
		this._text_2.className="ggskin ggskin_text ";
		this._text_2.ggType='text';
		hs ='';
		hs+='cursor : pointer;';
		hs+='height : 250px;';
		hs+='left : 21px;';
		hs+='position : absolute;';
		hs+='top : 9px;';
		hs+='visibility : inherit;';
		hs+='width : 300px;';
		hs+='pointer-events:auto;';
		hs+='font-size: 17px;';
		this._text_2.setAttribute('style',hs);
		this._text_2.style[domTransform + 'Origin']='50% 50%';
		hs ='position:absolute;';
		hs+='left: 0px;';
		hs+='top:  0px;';
		hs+='width: 300px;';
		hs+='height: 250px;';
		hs+='border: 0px solid #000000;';
		hs+='color: rgba(57,57,57,1);';
		hs+='text-align: left;';
		hs+='white-space: pre-wrap;';
		hs+='padding: 0px 1px 0px 1px;';
		hs+='overflow: hidden;';
		hs+='overflow-y: auto;';
		this._text_2__text.setAttribute('style',hs);
		this._text_2__text.innerHTML="Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo cons\"";
		this._text_2.appendChild(this._text_2__text);
		me._text_2.ggIsActive=function() {
			if ((this.parentNode) && (this.parentNode.ggIsActive)) {
				return this.parentNode.ggIsActive();
			}
			return false;
		}
		me._text_2.ggElementNodeId=function() {
			if ((this.parentNode) && (this.parentNode.ggElementNodeId)) {
				return this.parentNode.ggElementNodeId();
			}
			return me.ggNodeId;
		}
		this._text_2.ggUpdatePosition=function (useTransition) {
		}
		this._rectangle_5.appendChild(this._text_2);
		this._green_walls.appendChild(this._rectangle_5);
		this._svg_1=document.createElement('div');
		this._svg_1__img=document.createElement('img');
		this._svg_1__img.className='ggskin ggskin_svg';
		this._svg_1__img.setAttribute('src',basePath + 'images/svg_1.svg');
		this._svg_1__img.setAttribute('style','position: absolute;top: 0px;left: 0px;width: 100%;height: 100%;-webkit-user-drag:none;pointer-events:none;;');
		this._svg_1__img['ondragstart']=function() { return false; };
		this._svg_1.appendChild(this._svg_1__img);
		this._svg_1.ggId="Svg 1";
		this._svg_1.ggParameter={ rx:0,ry:0,a:45,sx:1,sy:1 };
		this._svg_1.ggVisible=true;
		this._svg_1.className="ggskin ggskin_svg ";
		this._svg_1.ggType='svg';
		hs ='';
		hs+='cursor : pointer;';
		hs+='height : 30px;';
		hs+='left : 22px;';
		hs+='position : absolute;';
		hs+='top : 31px;';
		hs+='visibility : inherit;';
		hs+='width : 30px;';
		hs+='pointer-events:auto;';
		this._svg_1.setAttribute('style',hs);
		this._svg_1.style[domTransform + 'Origin']='50% 50%';
		this._svg_1.style[domTransform]=parameterToTransform(this._svg_1.ggParameter);
		me._svg_1.ggIsActive=function() {
			if ((this.parentNode) && (this.parentNode.ggIsActive)) {
				return this.parentNode.ggIsActive();
			}
			return false;
		}
		me._svg_1.ggElementNodeId=function() {
			if ((this.parentNode) && (this.parentNode.ggElementNodeId)) {
				return this.parentNode.ggElementNodeId();
			}
			return me.ggNodeId;
		}
		me._svg_1.logicBlock_scaling = function() {
			var newLogicStateScaling;
			if (
				(me.player.getVariableValue('info') == true)
			)
			{
				newLogicStateScaling = 0;
			}
			else {
				newLogicStateScaling = -1;
			}
			if (me._svg_1.ggCurrentLogicStateScaling != newLogicStateScaling) {
				me._svg_1.ggCurrentLogicStateScaling = newLogicStateScaling;
				me._svg_1.style[domTransition]='' + cssPrefix + 'transform 500ms ease 0ms, ' + cssPrefix + 'transform 500ms ease 0ms';
				if (me._svg_1.ggCurrentLogicStateScaling == 0) {
					me._svg_1.ggParameter.sx = 0.8;
					me._svg_1.ggParameter.sy = 0.8;
					me._svg_1.style[domTransform]=parameterToTransform(me._svg_1.ggParameter);
				}
				else {
					me._svg_1.ggParameter.sx = 1;
					me._svg_1.ggParameter.sy = 1;
					me._svg_1.style[domTransform]=parameterToTransform(me._svg_1.ggParameter);
				}
			}
		}
		me._svg_1.logicBlock_angle = function() {
			var newLogicStateAngle;
			if (
				(me.player.getVariableValue('info') == true)
			)
			{
				newLogicStateAngle = 0;
			}
			else {
				newLogicStateAngle = -1;
			}
			if (me._svg_1.ggCurrentLogicStateAngle != newLogicStateAngle) {
				me._svg_1.ggCurrentLogicStateAngle = newLogicStateAngle;
				me._svg_1.style[domTransition]='' + cssPrefix + 'transform 500ms ease 0ms, ' + cssPrefix + 'transform 500ms ease 0ms';
				if (me._svg_1.ggCurrentLogicStateAngle == 0) {
					me._svg_1.ggParameter.a = 0;
					me._svg_1.style[domTransform]=parameterToTransform(me._svg_1.ggParameter);
				}
				else {
					me._svg_1.ggParameter.a = 45;
					me._svg_1.style[domTransform]=parameterToTransform(me._svg_1.ggParameter);
				}
			}
		}
		this._svg_1.onclick=function (e) {
			me.player.setVariableValue('info', !me.player.getVariableValue('info'));
		}
		this._svg_1.ggUpdatePosition=function (useTransition) {
		}
		this._green_walls.appendChild(this._svg_1);
		this._rectangle_9=document.createElement('div');
		this._rectangle_9.ggId="Rectangle 9";
		this._rectangle_9.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1 };
		this._rectangle_9.ggVisible=true;
		this._rectangle_9.className="ggskin ggskin_rectangle ";
		this._rectangle_9.ggType='rectangle';
		hs ='';
		hs+='background : rgba(0,0,0,0.313725);';
		hs+='border : 0px solid #000000;';
		hs+='cursor : pointer;';
		hs+='height : 25px;';
		hs+='left : 58px;';
		hs+='position : absolute;';
		hs+='top : 33px;';
		hs+='visibility : inherit;';
		hs+='width : 179px;';
		hs+='pointer-events:auto;';
		this._rectangle_9.setAttribute('style',hs);
		this._rectangle_9.style[domTransform + 'Origin']='50% 50%';
		me._rectangle_9.ggIsActive=function() {
			if ((this.parentNode) && (this.parentNode.ggIsActive)) {
				return this.parentNode.ggIsActive();
			}
			return false;
		}
		me._rectangle_9.ggElementNodeId=function() {
			if ((this.parentNode) && (this.parentNode.ggElementNodeId)) {
				return this.parentNode.ggElementNodeId();
			}
			return me.ggNodeId;
		}
		this._rectangle_9.onclick=function (e) {
			me.player.setVariableValue('info', !me.player.getVariableValue('info'));
		}
		this._rectangle_9.ggUpdatePosition=function (useTransition) {
		}
		this._green_walls.appendChild(this._rectangle_9);
		this._more_info=document.createElement('div');
		this._more_info__text=document.createElement('div');
		this._more_info.className='ggskin ggskin_textdiv';
		this._more_info.ggTextDiv=this._more_info__text;
		this._more_info.ggId="more info";
		this._more_info.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1 };
		this._more_info.ggVisible=true;
		this._more_info.className="ggskin ggskin_text ";
		this._more_info.ggType='text';
		hs ='';
		hs+='cursor : pointer;';
		hs+='height : 25px;';
		hs+='left : 59px;';
		hs+='position : absolute;';
		hs+='top : 34px;';
		hs+='visibility : inherit;';
		hs+='width : 178px;';
		hs+='pointer-events:auto;';
		hs+='font-size: 18px;';
		this._more_info.setAttribute('style',hs);
		this._more_info.style[domTransform + 'Origin']='50% 50%';
		hs ='position:absolute;';
		hs+='left: 0px;';
		hs+='top:  0px;';
		hs+='width: auto;';
		hs+='height: auto;';
		hs+='background: #000000;';
		hs+='background: rgba(0,0,0,0.117647);';
		hs+='border: 0px solid #000000;';
		hs+='color: rgba(255,255,255,1);';
		hs+='text-align: left;';
		hs+='white-space: nowrap;';
		hs+='padding: 0px 1px 0px 1px;';
		hs+='overflow: hidden;';
		this._more_info__text.setAttribute('style',hs);
		this._more_info__text.innerHTML="MORE INFO";
		this._more_info.appendChild(this._more_info__text);
		me._more_info.ggIsActive=function() {
			if ((this.parentNode) && (this.parentNode.ggIsActive)) {
				return this.parentNode.ggIsActive();
			}
			return false;
		}
		me._more_info.ggElementNodeId=function() {
			if ((this.parentNode) && (this.parentNode.ggElementNodeId)) {
				return this.parentNode.ggElementNodeId();
			}
			return me.ggNodeId;
		}
		me._more_info.logicBlock_position = function() {
			var newLogicStatePosition;
			if (
				(me.player.getVariableValue('info') == true)
			)
			{
				newLogicStatePosition = 0;
			}
			else {
				newLogicStatePosition = -1;
			}
			if (me._more_info.ggCurrentLogicStatePosition != newLogicStatePosition) {
				me._more_info.ggCurrentLogicStatePosition = newLogicStatePosition;
				me._more_info.style[domTransition]='left 500ms ease 0ms, top 500ms ease 0ms, opacity 500ms ease 0ms, visibility 500ms ease 0ms';
				if (me._more_info.ggCurrentLogicStatePosition == 0) {
					me._more_info.style.left='15px';
					me._more_info.style.top='34px';
				}
				else {
					me._more_info.style.left='59px';
					me._more_info.style.top='34px';
				}
			}
		}
		me._more_info.logicBlock_alpha = function() {
			var newLogicStateAlpha;
			if (
				(me.player.getVariableValue('info') == true)
			)
			{
				newLogicStateAlpha = 0;
			}
			else {
				newLogicStateAlpha = -1;
			}
			if (me._more_info.ggCurrentLogicStateAlpha != newLogicStateAlpha) {
				me._more_info.ggCurrentLogicStateAlpha = newLogicStateAlpha;
				me._more_info.style[domTransition]='left 500ms ease 0ms, top 500ms ease 0ms, opacity 500ms ease 0ms, visibility 500ms ease 0ms';
				if (me._more_info.ggCurrentLogicStateAlpha == 0) {
					me._more_info.style.visibility="hidden";
					me._more_info.style.opacity=0;
				}
				else {
					me._more_info.style.visibility=me._more_info.ggVisible?'inherit':'hidden';
					me._more_info.style.opacity=1;
				}
			}
		}
		this._more_info.onclick=function (e) {
			me.player.setVariableValue('info', !me.player.getVariableValue('info'));
		}
		this._more_info.ggUpdatePosition=function (useTransition) {
		}
		this._green_walls.appendChild(this._more_info);
		this._close=document.createElement('div');
		this._close__text=document.createElement('div');
		this._close.className='ggskin ggskin_textdiv';
		this._close.ggTextDiv=this._close__text;
		this._close.ggId="close";
		this._close.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1 };
		this._close.ggVisible=true;
		this._close.className="ggskin ggskin_text ";
		this._close.ggType='text';
		hs ='';
		hs+='cursor : pointer;';
		hs+='height : 25px;';
		hs+='left : 59px;';
		hs+='position : absolute;';
		hs+='top : 34px;';
		hs+='visibility : inherit;';
		hs+='width : 178px;';
		hs+='pointer-events:auto;';
		hs+='font-size: 18px;';
		this._close.setAttribute('style',hs);
		this._close.style[domTransform + 'Origin']='50% 50%';
		hs ='position:absolute;';
		hs+='left: 0px;';
		hs+='top:  0px;';
		hs+='width: auto;';
		hs+='height: auto;';
		hs+='background: #000000;';
		hs+='background: rgba(0,0,0,0.117647);';
		hs+='border: 0px solid #000000;';
		hs+='color: rgba(255,255,255,1);';
		hs+='text-align: left;';
		hs+='white-space: nowrap;';
		hs+='padding: 0px 1px 0px 1px;';
		hs+='overflow: hidden;';
		this._close__text.setAttribute('style',hs);
		this._close__text.innerHTML="CLOSE";
		this._close.appendChild(this._close__text);
		me._close.ggIsActive=function() {
			if ((this.parentNode) && (this.parentNode.ggIsActive)) {
				return this.parentNode.ggIsActive();
			}
			return false;
		}
		me._close.ggElementNodeId=function() {
			if ((this.parentNode) && (this.parentNode.ggElementNodeId)) {
				return this.parentNode.ggElementNodeId();
			}
			return me.ggNodeId;
		}
		me._close.logicBlock_position = function() {
			var newLogicStatePosition;
			if (
				(me.player.getVariableValue('info') == false)
			)
			{
				newLogicStatePosition = 0;
			}
			else {
				newLogicStatePosition = -1;
			}
			if (me._close.ggCurrentLogicStatePosition != newLogicStatePosition) {
				me._close.ggCurrentLogicStatePosition = newLogicStatePosition;
				me._close.style[domTransition]='left 500ms ease 0ms, top 500ms ease 0ms, opacity 500ms ease 0ms, visibility 500ms ease 0ms';
				if (me._close.ggCurrentLogicStatePosition == 0) {
					me._close.style.left='15px';
					me._close.style.top='34px';
				}
				else {
					me._close.style.left='59px';
					me._close.style.top='34px';
				}
			}
		}
		me._close.logicBlock_alpha = function() {
			var newLogicStateAlpha;
			if (
				(me.player.getVariableValue('info') == false)
			)
			{
				newLogicStateAlpha = 0;
			}
			else {
				newLogicStateAlpha = -1;
			}
			if (me._close.ggCurrentLogicStateAlpha != newLogicStateAlpha) {
				me._close.ggCurrentLogicStateAlpha = newLogicStateAlpha;
				me._close.style[domTransition]='left 500ms ease 0ms, top 500ms ease 0ms, opacity 500ms ease 0ms, visibility 500ms ease 0ms';
				if (me._close.ggCurrentLogicStateAlpha == 0) {
					me._close.style.visibility="hidden";
					me._close.style.opacity=0;
				}
				else {
					me._close.style.visibility=me._close.ggVisible?'inherit':'hidden';
					me._close.style.opacity=1;
				}
			}
		}
		this._close.onclick=function (e) {
			me.player.setVariableValue('info', !me.player.getVariableValue('info'));
		}
		this._close.ggUpdatePosition=function (useTransition) {
		}
		this._green_walls.appendChild(this._close);
		this._ht_example3.appendChild(this._green_walls);
		this._text_4=document.createElement('div');
		this._text_4__text=document.createElement('div');
		this._text_4.className='ggskin ggskin_textdiv';
		this._text_4.ggTextDiv=this._text_4__text;
		this._text_4.ggId="Text 4";
		this._text_4.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1 };
		this._text_4.ggVisible=true;
		this._text_4.className="ggskin ggskin_text ";
		this._text_4.ggType='text';
		hs ='';
		hs+='height : 23px;';
		hs+='left : -5px;';
		hs+='position : absolute;';
		hs+='top : 0px;';
		hs+='visibility : inherit;';
		hs+='width : 272px;';
		hs+='pointer-events:auto;';
		this._text_4.setAttribute('style',hs);
		this._text_4.style[domTransform + 'Origin']='50% 50%';
		hs ='position:absolute;';
		hs+='cursor: default;';
		hs+='left: 0px;';
		hs+='top:  0px;';
		hs+='width: 272px;';
		hs+='height: 23px;';
		hs+='background: #ffffff;';
		hs+='border: 0px solid #000000;';
		hs+='color: #000000;';
		hs+='text-align: left;';
		hs+='white-space: nowrap;';
		hs+='padding: 0px 1px 0px 1px;';
		hs+='overflow: hidden;';
		this._text_4__text.setAttribute('style',hs);
		this._text_4__text.innerHTML="SENIOR LIVING";
		this._text_4.appendChild(this._text_4__text);
		me._text_4.ggIsActive=function() {
			if ((this.parentNode) && (this.parentNode.ggIsActive)) {
				return this.parentNode.ggIsActive();
			}
			return false;
		}
		me._text_4.ggElementNodeId=function() {
			if ((this.parentNode) && (this.parentNode.ggElementNodeId)) {
				return this.parentNode.ggElementNodeId();
			}
			return me.ggNodeId;
		}
		this._text_4.ggUpdatePosition=function (useTransition) {
		}
		this._ht_example3.appendChild(this._text_4);
		this.__div = this._ht_example3;
	};
	function SkinHotspotClass_ht_ripple(skinObj,hotspot) {
		var me=this;
		var flag=false;
		var hs='';
		this.player=skinObj.player;
		this.skin=skinObj;
		this.hotspot=hotspot;
		var nodeId=String(hotspot.url);
		nodeId=(nodeId.charAt(0)=='{')?nodeId.substr(1, nodeId.length - 2):'';
		this.ggUserdata=this.skin.player.getNodeUserdata(nodeId);
		this.elementMouseDown=[];
		this.elementMouseOver=[];
		this.findElements=function(id,regex) {
			return me.skin.findElements(id,regex);
		}
		this._ht_ripple=document.createElement('div');
		this._ht_ripple.ggId="ht_ripple";
		this._ht_ripple.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1 };
		this._ht_ripple.ggVisible=true;
		this._ht_ripple.className="ggskin ggskin_hotspot ";
		this._ht_ripple.ggType='hotspot';
		hs ='';
		hs+='height : 5px;';
		hs+='left : 199px;';
		hs+='position : absolute;';
		hs+='top : 552px;';
		hs+='visibility : inherit;';
		hs+='width : 5px;';
		hs+='pointer-events:auto;';
		this._ht_ripple.setAttribute('style',hs);
		this._ht_ripple.style[domTransform + 'Origin']='50% 50%';
		me._ht_ripple.ggIsActive=function() {
			return me.player.getCurrentNode()==this.ggElementNodeId();
		}
		me._ht_ripple.ggElementNodeId=function() {
			return me.hotspot.url.substr(1, me.hotspot.url.length - 2);
		}
		this._ht_ripple.onclick=function (e) {
			me.skin.hotspotProxyClick(me.hotspot.id);
		}
		this._ht_ripple.ondblclick=function (e) {
			me.skin.hotspotProxyDoubleClick(me.hotspot.id);
		}
		this._ht_ripple.onmouseover=function (e) {
			me.player.setActiveHotspot(me.hotspot);
			me.skin.hotspotProxyOver(me.hotspot.id);
		}
		this._ht_ripple.onmouseout=function (e) {
			me.player.setActiveHotspot(null);
			me.skin.hotspotProxyOut(me.hotspot.id);
		}
		this._ht_ripple.ggUpdatePosition=function (useTransition) {
		}
		this._svg_2=document.createElement('div');
		this._svg_2__img=document.createElement('img');
		this._svg_2__img.className='ggskin ggskin_svg';
		this._svg_2__img.setAttribute('src',basePath + 'images/svg_2.svg');
		this._svg_2__img.setAttribute('style','position: absolute;top: 0px;left: 0px;width: 100%;height: 100%;-webkit-user-drag:none;pointer-events:none;;');
		this._svg_2__img['ondragstart']=function() { return false; };
		this._svg_2.appendChild(this._svg_2__img);
		this._svg_2.ggId="Svg 2";
		this._svg_2.ggDx=0;
		this._svg_2.ggDy=0;
		this._svg_2.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1 };
		this._svg_2.ggVisible=true;
		this._svg_2.className="ggskin ggskin_svg ";
		this._svg_2.ggType='svg';
		hs ='';
		hs+='cursor : pointer;';
		hs+='height : 100px;';
		hs+='left : -10000px;';
		hs+='position : absolute;';
		hs+='top : -10000px;';
		hs+='visibility : inherit;';
		hs+='width : 100px;';
		hs+='pointer-events:auto;';
		this._svg_2.setAttribute('style',hs);
		this._svg_2.style[domTransform + 'Origin']='50% 50%';
		me._svg_2.ggIsActive=function() {
			if ((this.parentNode) && (this.parentNode.ggIsActive)) {
				return this.parentNode.ggIsActive();
			}
			return false;
		}
		me._svg_2.ggElementNodeId=function() {
			if ((this.parentNode) && (this.parentNode.ggElementNodeId)) {
				return this.parentNode.ggElementNodeId();
			}
			return me.ggNodeId;
		}
		this._svg_2.ggUpdatePosition=function (useTransition) {
			if (useTransition==='undefined') {
				useTransition = false;
			}
			if (!useTransition) {
				this.style[domTransition]='none';
			}
			if (this.parentNode) {
				var pw=this.parentNode.clientWidth;
				var w=this.offsetWidth;
					this.style.left=(this.ggDx + pw/2 - w/2) + 'px';
				var ph=this.parentNode.clientHeight;
				var h=this.offsetHeight;
					this.style.top=(this.ggDy + ph/2 - h/2) + 'px';
			}
		}
		this._ht_ripple.appendChild(this._svg_2);
		this.__div = this._ht_ripple;
	};
	this.addSkinHotspot=function(hotspot) {
		var hsinst = null;
		if (hotspot.skinid=='ht_text1') {
			hotspot.skinid = 'ht_text1';
			hsinst = new SkinHotspotClass_ht_text1(me, hotspot);
			if (!hotspotTemplates.hasOwnProperty(hotspot.skinid)) {
				hotspotTemplates[hotspot.skinid] = [];
			}
			hotspotTemplates[hotspot.skinid].push(hsinst);
		} else
		if (hotspot.skinid=='ht_walls') {
			hotspot.skinid = 'ht_walls';
			hsinst = new SkinHotspotClass_ht_walls(me, hotspot);
			if (!hotspotTemplates.hasOwnProperty(hotspot.skinid)) {
				hotspotTemplates[hotspot.skinid] = [];
			}
			hotspotTemplates[hotspot.skinid].push(hsinst);
			me.callChildLogicBlocksHotspot_ht_walls_sizechanged();;
			me.callChildLogicBlocksHotspot_ht_walls_changenodeid();;
			me.callChildLogicBlocksHotspot_ht_walls_varchanged_info();;
		} else
		if (hotspot.skinid=='ht_frames') {
			hotspot.skinid = 'ht_frames';
			hsinst = new SkinHotspotClass_ht_frames(me, hotspot);
			if (!hotspotTemplates.hasOwnProperty(hotspot.skinid)) {
				hotspotTemplates[hotspot.skinid] = [];
			}
			hotspotTemplates[hotspot.skinid].push(hsinst);
			me.callChildLogicBlocksHotspot_ht_frames_sizechanged();;
			me.callChildLogicBlocksHotspot_ht_frames_changenodeid();;
			me.callChildLogicBlocksHotspot_ht_frames_varchanged_info();;
		} else
		if (hotspot.skinid=='ht_example') {
			hotspot.skinid = 'ht_example';
			hsinst = new SkinHotspotClass_ht_example(me, hotspot);
			if (!hotspotTemplates.hasOwnProperty(hotspot.skinid)) {
				hotspotTemplates[hotspot.skinid] = [];
			}
			hotspotTemplates[hotspot.skinid].push(hsinst);
			me.callChildLogicBlocksHotspot_ht_example_sizechanged();;
			me.callChildLogicBlocksHotspot_ht_example_changenodeid();;
			me.callChildLogicBlocksHotspot_ht_example_varchanged_info();;
		} else
		if (hotspot.skinid=='ht_info') {
			hotspot.skinid = 'ht_info';
			hsinst = new SkinHotspotClass_ht_info(me, hotspot);
			if (!hotspotTemplates.hasOwnProperty(hotspot.skinid)) {
				hotspotTemplates[hotspot.skinid] = [];
			}
			hotspotTemplates[hotspot.skinid].push(hsinst);
			me.callChildLogicBlocksHotspot_ht_info_sizechanged();;
			me.callChildLogicBlocksHotspot_ht_info_changenodeid();;
			me.callChildLogicBlocksHotspot_ht_info_varchanged_about();;
			me.callChildLogicBlocksHotspot_ht_info_varchanged_info();;
		} else
		if (hotspot.skinid=='ht_caro') {
			hotspot.skinid = 'ht_caro';
			hsinst = new SkinHotspotClass_ht_caro(me, hotspot);
			if (!hotspotTemplates.hasOwnProperty(hotspot.skinid)) {
				hotspotTemplates[hotspot.skinid] = [];
			}
			hotspotTemplates[hotspot.skinid].push(hsinst);
			me.callChildLogicBlocksHotspot_ht_caro_sizechanged();;
		} else
		if (hotspot.skinid=='ht_products') {
			hotspot.skinid = 'ht_products';
			hsinst = new SkinHotspotClass_ht_products(me, hotspot);
			if (!hotspotTemplates.hasOwnProperty(hotspot.skinid)) {
				hotspotTemplates[hotspot.skinid] = [];
			}
			hotspotTemplates[hotspot.skinid].push(hsinst);
			me.callChildLogicBlocksHotspot_ht_products_sizechanged();;
			me.callChildLogicBlocksHotspot_ht_products_changenodeid();;
			me.callChildLogicBlocksHotspot_ht_products_varchanged_about();;
			me.callChildLogicBlocksHotspot_ht_products_varchanged_info();;
		} else
		if (hotspot.skinid=='ht_example2') {
			hotspot.skinid = 'ht_example2';
			hsinst = new SkinHotspotClass_ht_example2(me, hotspot);
			if (!hotspotTemplates.hasOwnProperty(hotspot.skinid)) {
				hotspotTemplates[hotspot.skinid] = [];
			}
			hotspotTemplates[hotspot.skinid].push(hsinst);
			me.callChildLogicBlocksHotspot_ht_example2_sizechanged();;
			me.callChildLogicBlocksHotspot_ht_example2_changenodeid();;
			me.callChildLogicBlocksHotspot_ht_example2_varchanged_info();;
		} else
		if (hotspot.skinid=='ht_example3') {
			hotspot.skinid = 'ht_example3';
			hsinst = new SkinHotspotClass_ht_example3(me, hotspot);
			if (!hotspotTemplates.hasOwnProperty(hotspot.skinid)) {
				hotspotTemplates[hotspot.skinid] = [];
			}
			hotspotTemplates[hotspot.skinid].push(hsinst);
			me.callChildLogicBlocksHotspot_ht_example3_sizechanged();;
			me.callChildLogicBlocksHotspot_ht_example3_changenodeid();;
			me.callChildLogicBlocksHotspot_ht_example3_varchanged_info();;
		} else
		{
			hotspot.skinid = 'ht_ripple';
			hsinst = new SkinHotspotClass_ht_ripple(me, hotspot);
			if (!hotspotTemplates.hasOwnProperty(hotspot.skinid)) {
				hotspotTemplates[hotspot.skinid] = [];
			}
			hotspotTemplates[hotspot.skinid].push(hsinst);
		}
		return hsinst;
	}
	this.removeSkinHotspots=function() {
		if(hotspotTemplates['ht_text1']) {
			var i;
			for(i = 0; i < hotspotTemplates['ht_text1'].length; i++) {
				hotspotTemplates['ht_text1'][i] = null;
			}
		}
		if(hotspotTemplates['ht_walls']) {
			var i;
			for(i = 0; i < hotspotTemplates['ht_walls'].length; i++) {
				hotspotTemplates['ht_walls'][i] = null;
			}
		}
		if(hotspotTemplates['ht_frames']) {
			var i;
			for(i = 0; i < hotspotTemplates['ht_frames'].length; i++) {
				hotspotTemplates['ht_frames'][i] = null;
			}
		}
		if(hotspotTemplates['ht_example']) {
			var i;
			for(i = 0; i < hotspotTemplates['ht_example'].length; i++) {
				hotspotTemplates['ht_example'][i] = null;
			}
		}
		if(hotspotTemplates['ht_info']) {
			var i;
			for(i = 0; i < hotspotTemplates['ht_info'].length; i++) {
				hotspotTemplates['ht_info'][i] = null;
			}
		}
		if(hotspotTemplates['ht_caro']) {
			var i;
			for(i = 0; i < hotspotTemplates['ht_caro'].length; i++) {
				hotspotTemplates['ht_caro'][i] = null;
			}
		}
		if(hotspotTemplates['ht_products']) {
			var i;
			for(i = 0; i < hotspotTemplates['ht_products'].length; i++) {
				hotspotTemplates['ht_products'][i] = null;
			}
		}
		if(hotspotTemplates['ht_example2']) {
			var i;
			for(i = 0; i < hotspotTemplates['ht_example2'].length; i++) {
				hotspotTemplates['ht_example2'][i] = null;
			}
		}
		if(hotspotTemplates['ht_example3']) {
			var i;
			for(i = 0; i < hotspotTemplates['ht_example3'].length; i++) {
				hotspotTemplates['ht_example3'][i] = null;
			}
		}
		if(hotspotTemplates['ht_ripple']) {
			var i;
			for(i = 0; i < hotspotTemplates['ht_ripple'].length; i++) {
				hotspotTemplates['ht_ripple'][i] = null;
			}
		}
		hotspotTemplates = [];
	}
	this.addSkin();
	me._rectangle_71.logicBlock_position();
	me._rectangle_71.logicBlock_size();
	me._rectangle_70.logicBlock_position();
	me._rectangle_70.logicBlock_size();
	me._rectangle_7.logicBlock_position();
	me._rectangle_7.logicBlock_size();
	me._products.logicBlock_alpha();
	me._about.logicBlock_alpha();
	me._caro.logicBlock_alpha();
	player.addListener('sizechanged', function(args) { me._rectangle_71.logicBlock_position();me._rectangle_71.logicBlock_size();me._rectangle_70.logicBlock_position();me._rectangle_70.logicBlock_size();me._rectangle_7.logicBlock_position();me._rectangle_7.logicBlock_size(); });
	player.addListener('changenodeid', function(args) { me._products.logicBlock_alpha();me._about.logicBlock_alpha();me._caro.logicBlock_alpha(); });
	player.addListener('varchanged_products', function(args) { me._products.logicBlock_alpha(); });
	player.addListener('varchanged_about', function(args) { me._about.logicBlock_alpha(); });
	player.addListener('varchanged_caro', function(args) { me._caro.logicBlock_alpha(); });
	player.addListener('sizechanged', function(args) { me.callChildLogicBlocksHotspot_ht_walls_sizechanged();me.callChildLogicBlocksHotspot_ht_frames_sizechanged();me.callChildLogicBlocksHotspot_ht_example_sizechanged();me.callChildLogicBlocksHotspot_ht_info_sizechanged();me.callChildLogicBlocksHotspot_ht_caro_sizechanged();me.callChildLogicBlocksHotspot_ht_products_sizechanged();me.callChildLogicBlocksHotspot_ht_example2_sizechanged();me.callChildLogicBlocksHotspot_ht_example3_sizechanged(); });
	player.addListener('changenodeid', function(args) { me.callChildLogicBlocksHotspot_ht_walls_changenodeid();me.callChildLogicBlocksHotspot_ht_frames_changenodeid();me.callChildLogicBlocksHotspot_ht_example_changenodeid();me.callChildLogicBlocksHotspot_ht_info_changenodeid();me.callChildLogicBlocksHotspot_ht_products_changenodeid();me.callChildLogicBlocksHotspot_ht_example2_changenodeid();me.callChildLogicBlocksHotspot_ht_example3_changenodeid(); });
	player.addListener('varchanged_about', function(args) { me.callChildLogicBlocksHotspot_ht_info_varchanged_about();me.callChildLogicBlocksHotspot_ht_products_varchanged_about(); });
	player.addListener('varchanged_info', function(args) { me.callChildLogicBlocksHotspot_ht_walls_varchanged_info();me.callChildLogicBlocksHotspot_ht_frames_varchanged_info();me.callChildLogicBlocksHotspot_ht_example_varchanged_info();me.callChildLogicBlocksHotspot_ht_info_varchanged_info();me.callChildLogicBlocksHotspot_ht_products_varchanged_info();me.callChildLogicBlocksHotspot_ht_example2_varchanged_info();me.callChildLogicBlocksHotspot_ht_example3_varchanged_info(); });
	player.addListener('hotspotsremoved', function(args) { me.removeSkinHotspots(); });
};