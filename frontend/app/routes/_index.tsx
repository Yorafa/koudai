import { Link } from "@remix-run/react";

const SideBarButtons = [
    { id: 'button1', img: 'content/sidebar1/adventure.png', loadId: 1 },
    { id: 'button2', img: 'content/sidebar1/town.png', loadId: 2 },
    { id: 'button3', img: 'content/sidebar1/pet_infor.png', loadId: 3 },
    { id: 'button4', img: 'content/sidebar1/personal_infor.png', loadId: 4 },
]

const ToolButtons = [
    { id: 'tool1', img: 'content/tools/bag.png', loadId: 1 },
    { id: 'tool3', img: 'content/tools/task.png', loadId: 3 },
    { id: 'tool4', img: 'content/tools/bookmark.png', loadId: 4 },
]

export default function Index() {
    const handleReload = () => {
        console.log('reloading');
    }
    const handleLoad = (id: number) => {
        console.log(id);
        // $("#baginfo").hide();
        // $(".gamebox").width(788)
        // zdFlag = 0;
        // if (n == 3) {
        //     $("#gw").attr("src", "petInfo.html?" + Math.random())
        // } else if (n == 4) {
        //     $("#gw").attr("src", "PlyaerInfo.html?" + Math.random())
        // } else if (n == 2) {
        //     $("#gw").attr("src", "map.html?12")
        // } else if (n == 1) {
        //     $("#gw").attr("src", "BattleMap.html?" + Math.random())
        // } else if (n == 99) {
        //     window.location.href = "index.html?" + Math.random();
        // }
    };

    return (
        <div id="main">
            {/* left sidebar */}
            <div className="pt-33px pl-0">
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
            {/* gamebox */}
            <div className="gamebox">
                {/*  */}
                
            </div>
        </div>
    );
}