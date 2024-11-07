import { VictoryAxis, VictoryChart, VictoryLabel, VictoryLine, VictoryTheme } from "victory";
import type { FunctionComponent } from "react";

export interface ProfileCompareProps {
    reference: Array<number>,
    profile: Array<number>
}

export const ProfileCompare: FunctionComponent<ProfileCompareProps> = (props) => {

    //https://commerce.nearform.com/open-source/victory/docs/introduction/

    return (
        <>
            <VictoryChart
                theme={VictoryTheme.clean}
                padding={{
                    top: 50,
                    left: 10,
                    right: 10,
                    bottom: 50,
                }}
            >


                <VictoryAxis
                    tickValues={[0, 40, 80, 120, 160]}
                    tickFormat={(value) =>
                        `${value}`
                    }
                    style={{

                        axis: {
                            stroke: "#d9d9d9",
                        },
                        axisLabel: {
                            fontSize: 8,
                            padding: 50,
                        },
                        tickLabels: {
                            fontSize: 8,
                        },
                        grid: {
                            stroke: "#d9d9d9",
                            size:5

                        } as { stroke:string,size:number },
                    }}
                />

                <VictoryLine
                    style={{
                        data: {
                            stroke: "#ff00ff"
                        },
                    }}
                    data={props.reference.map(
                        (d, i) => ({
                            x: i,
                            y: d,
                        }),
                    )}
                />

                <VictoryLine
                    data={props.profile.map(
                        (d, i) => ({
                            x: i,
                            y: d,
                        }),
                    )}
                />

                <VictoryLabel
                    text="Profile compare"
                    style={{
                        ...VictoryTheme.clean.label,
                        fontSize: 12,
                    }}
                    dx={28}
                    dy={18}
                />

            </VictoryChart>
        </>
    )
}
