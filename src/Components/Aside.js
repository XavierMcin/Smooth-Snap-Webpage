import React from 'react';

function SideNav(props) {

    return (
        <aside style={props.mover}>
        	<nav>
        		<ul>
        			<li className="jump1" onMouseEnter={props.sPreview} onMouseLeave={props.hPreview} onClick={props.bJumper}><a href="#slide1">01</a></li>
        			<li className="jump2" onMouseEnter={props.sPreview} onMouseLeave={props.hPreview} onClick={props.bJumper}><a href="#slide2">02</a></li>
        			<li className="jump3" onMouseEnter={props.sPreview} onMouseLeave={props.hPreview} onClick={props.bJumper}><a href="#slide3">03</a></li>
        			<li className="jump4" onMouseEnter={props.sPreview} onMouseLeave={props.hPreview} onClick={props.bJumper}><a href="#slide4">04</a></li>
        			<li className="jump5" onMouseEnter={props.sPreview} onMouseLeave={props.hPreview} onClick={props.bJumper}><a href="#slide5">05</a></li>
        			<li className="jump6" onMouseEnter={props.sPreview} onMouseLeave={props.hPreview} onClick={props.bJumper}><a href="#slide6">06</a></li>
        			<li className="jump7" onMouseEnter={props.sPreview} onMouseLeave={props.hPreview} onClick={props.bJumper}><a href="#slide7">07</a></li>
        			<li className="jump8" onMouseEnter={props.sPreview} onMouseLeave={props.hPreview} onClick={props.bJumper}><a href="#slide8">08</a></li>
        			<li className="jump9" onMouseEnter={props.sPreview} onMouseLeave={props.hPreview} onClick={props.bJumper}><a href="#slide9">09</a></li>
        			<li className="jump10" onMouseEnter={props.sPreview} onMouseLeave={props.hPreview} onClick={props.bJumper}><a href="#slide10">10</a></li>
        			<li className="jump11" onMouseEnter={props.sPreview} onMouseLeave={props.hPreview} onClick={props.bJumper}><a href="#slide11">11</a></li>
        			<li className="jump12" onMouseEnter={props.sPreview} onMouseLeave={props.hPreview} onClick={props.bJumper}><a href="#slide12">12</a></li>
        		</ul>
        	</nav>
			<div className="pic-wrap">
				<div className="hide">
					<img src="./Images/block-1.jpg" alt=""></img>
				</div>
				<div className="hide">
					<img src="./Images/block-2.jpg" alt=""></img>
				</div>
				<div className="hide">
					<img src="./Images/block-3.jpg" alt=""></img>
				</div>
				<div className="hide">
					<img src="./Images/block-4.jpg" alt=""></img>
				</div>
				<div className="hide">
					<img src="./Images/block-5.jpg" alt=""></img>
				</div>
				<div className="hide">
					<img src="./Images/block-6.jpg" alt=""></img>
				</div>
				<div className="hide">
					<img src="./Images/block-7.jpg" alt=""></img>
				</div>
				<div className="hide">
					<img src="./Images/block-8.jpg" alt=""></img>
				</div>
				<div className="hide">
					<img src="./Images/block-9.jpg" alt=""></img>
				</div>
				<div className="hide">
					<img src="./Images/block-10.jpg" alt=""></img>
				</div>
				<div className="hide">
					<img src="./Images/block-11.jpg" alt=""></img>
				</div>
				<div className="hide">
					<img src="./Images/block-12.jpg" alt=""></img>
				</div>
			</div>
        </aside>
    )
    
}

export default SideNav;