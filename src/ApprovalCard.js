import React from "react";

const ApprovalCard = (props) => {
    return (
        <div className="ui card">

            <div className="content">
                {props.content}
            </div>

            <div className="extra content">
                <div  className="ui two buttons">
                    <div class="ui basic green button">Approve</div>
                    <div class="ui basic red button">Decline</div>
                </div>
            </div>

            {/* <div>
                <button className="ui button">Approve</button>
                <button className="ui button">Reject</button>
            </div> */}


        </div>

    );
};

export default ApprovalCard;
