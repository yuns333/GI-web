import React from 'react';
import axios from 'axios';
import * as d3 from 'd3'
import * as cloud from 'd3-cloud'

class Referrers extends React.Component{
    constructor(props){
        super(props);
        this.state = {

        };
    }

    getDashBoardInfo(){
        var that = this;
        console.log("-----------data::",that.props.userId, that.props.projectName, that.props.period)

         //referrers
         axios({
            method: 'post',
            url: '/api/referrers',
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
                var referrer_data= new Array();
                var sum=0;
                for(var i=0; i<temp.length; i++)
                {
                    sum+=temp[i].doc_count;
                }
                for (var i=0; i<temp.length; i++)
                {
                    referrer_data.push({word:temp[i].key, size:(temp[i].doc_count/sum)*45});
                }
    
                // set the dimensions and margins of the graph
                var margin = {top: 10, right: 10, bottom: 10, left: 10},
                    width = 650 - margin.left - margin.right,
                    height = 500 - margin.top - margin.bottom;
                
                // append the svg object to the body of the page
                var svg = d3.select("#referrers").append("svg")
                    .attr("width", width + margin.left + margin.right)
                    .attr("height", height + margin.top + margin.bottom)
                    .style("fill", "yellow")
                  .append("g")
                    .attr("transform",
                          "translate(" + margin.left + "," + margin.top + ")");
                
                // Constructs a new cloud layout instance. It run an algorithm to find the position of words that suits your requirements
                // Wordcloud features that are different from one word to the other must be here
                var layout = cloud()
                  .size([width, height])
                  .words(referrer_data.map(function(d) { return {text: d.word, size:d.size}; }))
                  .padding(5)        //space between words
                  .rotate(function() { return 0; })
                  .fontSize(function(d) { return d.size; })      // font size of words
                  .on("end", draw);
                layout.start();
                
                // This function takes the output of 'layout' above and draw the words
                // Wordcloud features that are THE SAME from one word to the other can be here
                function draw(words) {
                  var colors = new Array("#1f77b4", "#ff7f0e", "#2ca02c", "#d62728", "#9467bd", "#8c564b", "#e377c2", "#7f7f7f", "#bcbd22", "#17becf");
                  svg
                    .append("g")
                      .attr("transform", "translate(" + layout.size()[0] / 2 + "," + layout.size()[1] / 2 + ")")
                      .selectAll("text")
                        .data(words)
                      .enter().append("text")
                        .style("font-size", function(d) { return d.size+10; })
                        .style("fill", function(d, i) { return colors[parseInt(i)%10];}
                        )
                        .attr("text-anchor", "middle")
                        .style("font-family", "Impact")
                        .attr("transform", function(d) {
                          return "translate(" + [d.x, d.y] + ")rotate(" + d.rotate + ")";
                        })
                        .text(function(d) { return d.text; });
                }
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
                    Referrers
                </h1>
                <div id="referrers"/>
            </div>
        )
    }
}

export default Referrers;