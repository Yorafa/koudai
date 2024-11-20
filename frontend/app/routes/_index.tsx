import { Link } from "@remix-run/react";

const SideBarButtons = [
    { id: 'button1', img: 'content/sidebar1/adventure.png', loadId: 1 },
    { id: 'button2', img: 'content/sidebar1/town.png', loadId: 2 },
    { id: 'button3', img: 'content/sidebar1/pet_infor.png', loadId: 3 },
    { id: 'button4', img: 'content/sidebar1/personal_infor.png', loadId: 4 },
]

const ToolButtons = [
    { id: 'tool1', img: 'content/tools/bag.png', loadId: 5 },
    { id: 'tool3', img: 'content/tools/task.png', loadId: 6 },
    { id: 'tool4', img: 'content/tools/bookmark.png', loadId: 7 },
]

const TipButtons = [
    { id: 'tip1', img: 'content/tip/help.png', loadId: 8 },
    { id: 'tip2', img: 'content/tip/official.png', loadId: 9 },
    { id: 'tip3', img: 'content/tip/topup.png', loadId: 10 },
    { id: 'tip4', img: 'content/tip/support.png', loadId: 11 },
    { id: 'tip5', img: 'content/tip/discuss.png', loadId: 12 },
    { id: 'tip6', img: 'content/tip/quit.png', loadId: 99 },
]

export default function Index() {
    const handleReload = () => {
        console.log('reloading');
    }
    const handleLoad = (id: number) => {
        console.log(id);
    };

    return (
        <div id="main">
            {/* left sidebar */}
            <div className="pt-33px pl-0 fl" style={{ backgroundImage: `url(content/sidebar1/side.jpg)`, width: '197px', height: '369px', position: 'relative' }}>
                {SideBarButtons.map((button) => (
                    <div
                        key={button.id}
                        id={button.id}
                        className="button_"
                        style={{ backgroundImage: `url(${button.img})` }}
                        onClick={() => handleLoad(button.loadId)}
                    ></div>
                ))}
            </div>
            {/* gamebox */}
            <div className="gamebox fl" style={{ backgroundImage: `url(content/content.jpg)`, width: '803px', height: '369px', paddingTop: '32px', position: 'relative' }}>
                {/* right corner content */}
                <div className="tools">
                    {ToolButtons.map((button) => (
                        <div
                            key={button.id}
                            id={button.id}
                            className="button_"
                            style={{ backgroundImage: `url(${button.img})`, width: '47px', height: '44px', display: 'inline-block', cursor: 'pointer' }}
                            onClick={() => handleLoad(button.loadId)}
                        ></div>
                    ))}
                </div>
            </div>
            {/* bottom */}
            <div>
                <div className="chat fl" style={{ backgroundImage: `url(content/chatbg.jpg)`, width: '710px', height: '239px', position: 'relative' }}>

                </div>
                {/* tip */}
                <div className="Tip fl">
                    <div className="tipboard" style={{ backgroundImage: `url(content/tip/tipboard.png)`, width: '290px', height: '169px', position: 'relative' }}> </div>
                    <div style={{ width: '290px', height: '70px', position: 'relative', backgroundImage: `url(content/tip/bottom.png)` }}>
                        {TipButtons.map((button) => (
                            <div
                                key={button.id}
                                id={button.id}
                                className="button_"
                                style={{ backgroundImage: `url(${button.img})`, width: '48px', height: '45px', display: 'inline-block', cursor: 'pointer' }}
                                onClick={() => handleLoad(button.loadId)}
                            ></div>
                        ))}
                    </div>
                </div>
            </div>

        </div>
    );
}