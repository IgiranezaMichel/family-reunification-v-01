import { ArrowDownward, ArrowUpward } from "@material-ui/icons"
import { GaugeCard } from "../../../components/GuageCard"
import { BarChatCard } from "../../../components/barcharts"
import { TimelineComponent } from "../../../components/TimelineComponent"
import { Example } from "./editor"
export const AdminHome = () => {
    return (
        <main className="container row">
            <div className="col-sm-5">
                <GaugeCard gaugeColor="blue" cardClass="col-12" elevation={4} gaugeTitle="Save" gaugeValue={28}>
                    <div className="row col-12 m-auto">
                        <div className="card col-6 p-0 rounded-0">
                            <div className="bg-body-tertiary p-1">
                                <span><span className="bg-primary float-end rounded text-white">16% <ArrowUpward /></span><small>Number of akdners</small> </span>
                            </div>
                            <div className="display-5 fw-bold">
                                1,190
                            </div>
                        </div>
                        <div className="card col-6 p-0 rounded-0">
                            <div className="bg-body-tertiary p-1">
                                <span><span className="bg-primary float-end rounded text-white">16% <ArrowDownward /></span><small>Number of akdners</small> </span>
                            </div>
                            <div className="display-5 fw-bold">
                                1,190
                            </div>
                        </div>
                    </div>
                </GaugeCard>
            </div>
            <div className="col-sm-7 card rounded-0">
                <BarChatCard title="djgoe" />
            </div>
            <div className="fs-5 fw-bold mt-4">Recent Posts</div>
            <Example/>
            <TimelineComponent title="Recent">
                <div>This ...</div>
            </TimelineComponent>
            <TimelineComponent title="Recent">
                <div>This ...</div>
            </TimelineComponent>
        </main>
    )
}   