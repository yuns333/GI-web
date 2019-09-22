import React from 'react';
import axios from 'axios';
import * as d3 from 'd3';

class Browsers extends React.Component{
    constructor(props){
        super(props);
    }

    getDashBoardInfo(){
        var that = this;
        console.log("-----------data::",that.props.userId, that.props.projectName, that.props.period)

          //browsers breakdown 
          axios({
            method: 'post',
            url: '/api/browsers',
            headers: {
                'Accept': 'application/json',
                'Content-Type': 'application/json;charset=UTF-8'
            },
            data: {
                "user": that.props.userId,
                "project": that.props.projectName,
                "period":that.props.period
            }
          })
          .then(function (response) {
            var temp = response.data;
            var data= new Array();
                        for (var i=0; i<temp.length; i++)
                        {
                            data.push({name:temp[i].key, value:temp[i].doc_count});
                        }
                        
                        var text = "";
            
                        var width = 500;
                        var height = 300;
                        var thickness = 40;
                        var duration = 750;
            
                        var radius = (width/ 2)-100;
                        var color = d3.scaleOrdinal(d3.schemeSet2);
            
                        var svg1 = d3.select("#browsers_breakdown")
                        .append('svg')
                        .attr('class', 'pie')
                        .attr('width', width)
                        .attr('height', height);
            
                        var g = svg1.append('g')
                        .attr('transform', 'translate(' + ((width/2)-100)+ ',' + (height/2) + ')');
            
                        var arc = d3.arc()
                        .innerRadius(radius - thickness)
                        .outerRadius(radius)
            
                        var pie = d3.pie()
                        .value(function(d) { return d.value; })
                        .sort(null);
            
                        var path = g.selectAll('path')
                        .data(pie(data))
                        .enter()
                        .append("g")
                        .on("mouseover", function(d) {
                            let g = d3.select(this)
                                .style("cursor", "pointer")
                                .style("fill", "black")
                                .append("g")
                                .attr("class", "text-group");
                        
                            g.append("text")
                                .attr("class", "name-text")
                                .text(`${d.data.name}`)
                                .attr('text-anchor', 'middle')
                                .attr('dy', '-1.2em');
                        
                            g.append("text")
                                .attr("class", "value-text")
                                .text(`${d.data.value}`)
                                .attr('text-anchor', 'middle')
                                .attr('dy', '.6em');
                            })
                        .on("mouseout", function(d) {
                            d3.select(this)
                                .style("cursor", "none")  
                                .style("fill", color(this._current))
                                .select(".text-group").remove();
                            })
                        .append('path')
                        .attr('d', arc)
                        .attr('fill', (d,i) => color(i))
                        .on("mouseover", function(d) {
                            d3.select(this)     
                                .style("cursor", "pointer")
                                .style("fill", "black");
                            })
                        .on("mouseout", function(d) {
                            d3.select(this)
                                .style("cursor", "none")  
                                .style("fill", color(this._current));
                            })
                        .each(function(d, i) { this._current = i; });
            
            
                        var legendGroup1 = d3.select('#browsers_breakdown svg').append("g")
                            
                            legendGroup1.selectAll('mydot')
                            .data(data)
                            .enter()
                            .append('circle')
                            .attr('cx', function(d) {
                                return 325;
                            })
                            .attr('cy', function(d, i) {
                                return 100 + (i * 20);
                            })
                            .attr('r', "7")
                            .style('fill', function(d, i) {
                                return color(i);
                            })
            
                            legendGroup1.selectAll('mylabel')
                            .data(data)
                            .enter()
                            .append('text')
                            .attr('x', 340)
                            .attr('y', function(d, i) {
                                return 100 + (i*20);
                            })
                            .style("fill", function(d, i) {
                                return color(i);
                            })
                            .text(function(d) {
                                return d.name;
                            })
                            .attr("text-anchor", "left")
                            .style("alignment-baseline", "middle")

          })
          .catch(function (error) {
            window.alert('대시보드 불러오기 실패')
            console.log("----------------error::",error);
          });
    }

    componentDidMount() {
        console.log("---------------componentdidmount::")
        this.getDashBoardInfo()
    }

    render(){
        return(
            <div>
                <h1 >
                Browsers breakdown
                </h1>
                <div id="browsers_breakdown"/>
            </div>
        )
    }
}

export default Browsers;
