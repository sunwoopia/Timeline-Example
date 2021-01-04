import React from "react";
import {Feed} from "../components/Feed";
import Fade from "react-reveal";

export function Timeline(props) {
    return <>
        <>
            <Fade bottom>
                {props.feeds.map((feed) => <Feed name={feed.name} body={feed.body} />)}
            </Fade>
        </>
    </>
}
