import React from 'react';
import AddBoxIcon from '@material-ui/icons/AddBox';
import '../../../MainPage/Main.scss';

const SearchFriend = ({friendDB, UserData, onPlustHandler }) => {

    if(friendDB.friend){
        if(friendDB.friend.length !== 0){ //검색결과 있을 때
            return (
                <div>
                    {
                        friendDB.friend.map((searched) => (
                            // let searched = searched.filter(exceptsearch => exceptsearch.userId === UserData.userId)
                            searched.userId !== UserData.userId ?   //검색결과에서 자신 제외
                                <div className="myProfile" key={searched.userId} onClick={()=>onPlustHandler(searched.userId)}>
                                    <img src={searched.image} />
                                    <div className="text_site">
                                        <div className="top">{searched.userName}</div>
                                        <div className="bottom">{searched.message}</div>
                                    </div>
                                    <AddBoxIcon className="plus"/>
                                </div>
                                :
                                <></>
                        ))           
                    }
                </div>
            )
        }
        else{          //검색결과 없을 때
            return(
                <div className="myProfile">
                    <div className="text_site">
                        <div className="top">친구없엉</div>
                        <div className="bottom">ㅇㅎㅇ</div>
                    </div>
                </div>
            )
        }
    }else{          //검색결과 없을 때
        return(
            <div className="myProfile">
                <div className="text_site">
                    <div className="top">친구없엉</div>
                    <div className="bottom">ㅇㅎㅇ</div>
                </div>
            </div>
        )
    }
    
    
};

export default SearchFriend