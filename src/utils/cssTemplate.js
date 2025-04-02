export function generateBootstrap() {
  return `
  /*!
 * Bootstrap Grid v4.2.1 (https://getbootstrap.com/)
 * Copyright 2011-2018 The Bootstrap Authors
 * Copyright 2011-2018 Twitter, Inc.
 * Licensed under MIT (https://github.com/twbs/bootstrap/blob/master/LICENSE)
 */html{box-sizing:border-box;-ms-overflow-style:scrollbar}*,::after,::before{box-sizing:inherit}.container{width:100%;padding-right:15px;padding-left:15px;margin-right:auto;margin-left:auto}@media (min-width:576px){.container{max-width:540px}}@media (min-width:768px){.container{max-width:720px}}@media (min-width:992px){.container{max-width:960px}}@media (min-width:1200px){.container{max-width:1140px}}.container-fluid{width:100%;padding-right:15px;padding-left:15px;margin-right:auto;margin-left:auto}.row{display:-ms-flexbox;display:flex;-ms-flex-wrap:wrap;flex-wrap:wrap;margin-right:-15px;margin-left:-15px}.no-gutters{margin-right:0;margin-left:0}.no-gutters>.col,.no-gutters>[class*=col-]{padding-right:0;padding-left:0}.col,.col-1,.col-10,.col-11,.col-12,.col-2,.col-3,.col-4,.col-5,.col-6,.col-7,.col-8,.col-9,.col-auto,.col-lg,.col-lg-1,.col-lg-10,.col-lg-11,.col-lg-12,.col-lg-2,.col-lg-3,.col-lg-4,.col-lg-5,.col-lg-6,.col-lg-7,.col-lg-8,.col-lg-9,.col-lg-auto,.col-md,.col-md-1,.col-md-10,.col-md-11,.col-md-12,.col-md-2,.col-md-3,.col-md-4,.col-md-5,.col-md-6,.col-md-7,.col-md-8,.col-md-9,.col-md-auto,.col-sm,.col-sm-1,.col-sm-10,.col-sm-11,.col-sm-12,.col-sm-2,.col-sm-3,.col-sm-4,.col-sm-5,.col-sm-6,.col-sm-7,.col-sm-8,.col-sm-9,.col-sm-auto,.col-xl,.col-xl-1,.col-xl-10,.col-xl-11,.col-xl-12,.col-xl-2,.col-xl-3,.col-xl-4,.col-xl-5,.col-xl-6,.col-xl-7,.col-xl-8,.col-xl-9,.col-xl-auto{position:relative;width:100%;padding-right:15px;padding-left:15px}.col{-ms-flex-preferred-size:0;flex-basis:0;-ms-flex-positive:1;flex-grow:1;max-width:100%}.col-auto{-ms-flex:0 0 auto;flex:0 0 auto;width:auto;max-width:100%}.col-1{-ms-flex:0 0 8.333333%;flex:0 0 8.333333%;max-width:8.333333%}.col-2{-ms-flex:0 0 16.666667%;flex:0 0 16.666667%;max-width:16.666667%}.col-3{-ms-flex:0 0 25%;flex:0 0 25%;max-width:25%}.col-4{-ms-flex:0 0 33.333333%;flex:0 0 33.333333%;max-width:33.333333%}.col-5{-ms-flex:0 0 41.666667%;flex:0 0 41.666667%;max-width:41.666667%}.col-6{-ms-flex:0 0 50%;flex:0 0 50%;max-width:50%}.col-7{-ms-flex:0 0 58.333333%;flex:0 0 58.333333%;max-width:58.333333%}.col-8{-ms-flex:0 0 66.666667%;flex:0 0 66.666667%;max-width:66.666667%}.col-9{-ms-flex:0 0 75%;flex:0 0 75%;max-width:75%}.col-10{-ms-flex:0 0 83.333333%;flex:0 0 83.333333%;max-width:83.333333%}.col-11{-ms-flex:0 0 91.666667%;flex:0 0 91.666667%;max-width:91.666667%}.col-12{-ms-flex:0 0 100%;flex:0 0 100%;max-width:100%}.order-first{-ms-flex-order:-1;order:-1}.order-last{-ms-flex-order:13;order:13}.order-0{-ms-flex-order:0;order:0}.order-1{-ms-flex-order:1;order:1}.order-2{-ms-flex-order:2;order:2}.order-3{-ms-flex-order:3;order:3}.order-4{-ms-flex-order:4;order:4}.order-5{-ms-flex-order:5;order:5}.order-6{-ms-flex-order:6;order:6}.order-7{-ms-flex-order:7;order:7}.order-8{-ms-flex-order:8;order:8}.order-9{-ms-flex-order:9;order:9}.order-10{-ms-flex-order:10;order:10}.order-11{-ms-flex-order:11;order:11}.order-12{-ms-flex-order:12;order:12}.offset-1{margin-left:8.333333%}.offset-2{margin-left:16.666667%}.offset-3{margin-left:25%}.offset-4{margin-left:33.333333%}.offset-5{margin-left:41.666667%}.offset-6{margin-left:50%}.offset-7{margin-left:58.333333%}.offset-8{margin-left:66.666667%}.offset-9{margin-left:75%}.offset-10{margin-left:83.333333%}.offset-11{margin-left:91.666667%}@media (min-width:576px){.col-sm{-ms-flex-preferred-size:0;flex-basis:0;-ms-flex-positive:1;flex-grow:1;max-width:100%}.col-sm-auto{-ms-flex:0 0 auto;flex:0 0 auto;width:auto;max-width:100%}.col-sm-1{-ms-flex:0 0 8.333333%;flex:0 0 8.333333%;max-width:8.333333%}.col-sm-2{-ms-flex:0 0 16.666667%;flex:0 0 16.666667%;max-width:16.666667%}.col-sm-3{-ms-flex:0 0 25%;flex:0 0 25%;max-width:25%}.col-sm-4{-ms-flex:0 0 33.333333%;flex:0 0 33.333333%;max-width:33.333333%}.col-sm-5{-ms-flex:0 0 41.666667%;flex:0 0 41.666667%;max-width:41.666667%}.col-sm-6{-ms-flex:0 0 50%;flex:0 0 50%;max-width:50%}.col-sm-7{-ms-flex:0 0 58.333333%;flex:0 0 58.333333%;max-width:58.333333%}.col-sm-8{-ms-flex:0 0 66.666667%;flex:0 0 66.666667%;max-width:66.666667%}.col-sm-9{-ms-flex:0 0 75%;flex:0 0 75%;max-width:75%}.col-sm-10{-ms-flex:0 0 83.333333%;flex:0 0 83.333333%;max-width:83.333333%}.col-sm-11{-ms-flex:0 0 91.666667%;flex:0 0 91.666667%;max-width:91.666667%}.col-sm-12{-ms-flex:0 0 100%;flex:0 0 100%;max-width:100%}.order-sm-first{-ms-flex-order:-1;order:-1}.order-sm-last{-ms-flex-order:13;order:13}.order-sm-0{-ms-flex-order:0;order:0}.order-sm-1{-ms-flex-order:1;order:1}.order-sm-2{-ms-flex-order:2;order:2}.order-sm-3{-ms-flex-order:3;order:3}.order-sm-4{-ms-flex-order:4;order:4}.order-sm-5{-ms-flex-order:5;order:5}.order-sm-6{-ms-flex-order:6;order:6}.order-sm-7{-ms-flex-order:7;order:7}.order-sm-8{-ms-flex-order:8;order:8}.order-sm-9{-ms-flex-order:9;order:9}.order-sm-10{-ms-flex-order:10;order:10}.order-sm-11{-ms-flex-order:11;order:11}.order-sm-12{-ms-flex-order:12;order:12}.offset-sm-0{margin-left:0}.offset-sm-1{margin-left:8.333333%}.offset-sm-2{margin-left:16.666667%}.offset-sm-3{margin-left:25%}.offset-sm-4{margin-left:33.333333%}.offset-sm-5{margin-left:41.666667%}.offset-sm-6{margin-left:50%}.offset-sm-7{margin-left:58.333333%}.offset-sm-8{margin-left:66.666667%}.offset-sm-9{margin-left:75%}.offset-sm-10{margin-left:83.333333%}.offset-sm-11{margin-left:91.666667%}}@media (min-width:768px){.col-md{-ms-flex-preferred-size:0;flex-basis:0;-ms-flex-positive:1;flex-grow:1;max-width:100%}.col-md-auto{-ms-flex:0 0 auto;flex:0 0 auto;width:auto;max-width:100%}.col-md-1{-ms-flex:0 0 8.333333%;flex:0 0 8.333333%;max-width:8.333333%}.col-md-2{-ms-flex:0 0 16.666667%;flex:0 0 16.666667%;max-width:16.666667%}.col-md-3{-ms-flex:0 0 25%;flex:0 0 25%;max-width:25%}.col-md-4{-ms-flex:0 0 33.333333%;flex:0 0 33.333333%;max-width:33.333333%}.col-md-5{-ms-flex:0 0 41.666667%;flex:0 0 41.666667%;max-width:41.666667%}.col-md-6{-ms-flex:0 0 50%;flex:0 0 50%;max-width:50%}.col-md-7{-ms-flex:0 0 58.333333%;flex:0 0 58.333333%;max-width:58.333333%}.col-md-8{-ms-flex:0 0 66.666667%;flex:0 0 66.666667%;max-width:66.666667%}.col-md-9{-ms-flex:0 0 75%;flex:0 0 75%;max-width:75%}.col-md-10{-ms-flex:0 0 83.333333%;flex:0 0 83.333333%;max-width:83.333333%}.col-md-11{-ms-flex:0 0 91.666667%;flex:0 0 91.666667%;max-width:91.666667%}.col-md-12{-ms-flex:0 0 100%;flex:0 0 100%;max-width:100%}.order-md-first{-ms-flex-order:-1;order:-1}.order-md-last{-ms-flex-order:13;order:13}.order-md-0{-ms-flex-order:0;order:0}.order-md-1{-ms-flex-order:1;order:1}.order-md-2{-ms-flex-order:2;order:2}.order-md-3{-ms-flex-order:3;order:3}.order-md-4{-ms-flex-order:4;order:4}.order-md-5{-ms-flex-order:5;order:5}.order-md-6{-ms-flex-order:6;order:6}.order-md-7{-ms-flex-order:7;order:7}.order-md-8{-ms-flex-order:8;order:8}.order-md-9{-ms-flex-order:9;order:9}.order-md-10{-ms-flex-order:10;order:10}.order-md-11{-ms-flex-order:11;order:11}.order-md-12{-ms-flex-order:12;order:12}.offset-md-0{margin-left:0}.offset-md-1{margin-left:8.333333%}.offset-md-2{margin-left:16.666667%}.offset-md-3{margin-left:25%}.offset-md-4{margin-left:33.333333%}.offset-md-5{margin-left:41.666667%}.offset-md-6{margin-left:50%}.offset-md-7{margin-left:58.333333%}.offset-md-8{margin-left:66.666667%}.offset-md-9{margin-left:75%}.offset-md-10{margin-left:83.333333%}.offset-md-11{margin-left:91.666667%}}@media (min-width:992px){.col-lg{-ms-flex-preferred-size:0;flex-basis:0;-ms-flex-positive:1;flex-grow:1;max-width:100%}.col-lg-auto{-ms-flex:0 0 auto;flex:0 0 auto;width:auto;max-width:100%}.col-lg-1{-ms-flex:0 0 8.333333%;flex:0 0 8.333333%;max-width:8.333333%}.col-lg-2{-ms-flex:0 0 16.666667%;flex:0 0 16.666667%;max-width:16.666667%}.col-lg-3{-ms-flex:0 0 25%;flex:0 0 25%;max-width:25%}.col-lg-4{-ms-flex:0 0 33.333333%;flex:0 0 33.333333%;max-width:33.333333%}.col-lg-5{-ms-flex:0 0 41.666667%;flex:0 0 41.666667%;max-width:41.666667%}.col-lg-6{-ms-flex:0 0 50%;flex:0 0 50%;max-width:50%}.col-lg-7{-ms-flex:0 0 58.333333%;flex:0 0 58.333333%;max-width:58.333333%}.col-lg-8{-ms-flex:0 0 66.666667%;flex:0 0 66.666667%;max-width:66.666667%}.col-lg-9{-ms-flex:0 0 75%;flex:0 0 75%;max-width:75%}.col-lg-10{-ms-flex:0 0 83.333333%;flex:0 0 83.333333%;max-width:83.333333%}.col-lg-11{-ms-flex:0 0 91.666667%;flex:0 0 91.666667%;max-width:91.666667%}.col-lg-12{-ms-flex:0 0 100%;flex:0 0 100%;max-width:100%}.order-lg-first{-ms-flex-order:-1;order:-1}.order-lg-last{-ms-flex-order:13;order:13}.order-lg-0{-ms-flex-order:0;order:0}.order-lg-1{-ms-flex-order:1;order:1}.order-lg-2{-ms-flex-order:2;order:2}.order-lg-3{-ms-flex-order:3;order:3}.order-lg-4{-ms-flex-order:4;order:4}.order-lg-5{-ms-flex-order:5;order:5}.order-lg-6{-ms-flex-order:6;order:6}.order-lg-7{-ms-flex-order:7;order:7}.order-lg-8{-ms-flex-order:8;order:8}.order-lg-9{-ms-flex-order:9;order:9}.order-lg-10{-ms-flex-order:10;order:10}.order-lg-11{-ms-flex-order:11;order:11}.order-lg-12{-ms-flex-order:12;order:12}.offset-lg-0{margin-left:0}.offset-lg-1{margin-left:8.333333%}.offset-lg-2{margin-left:16.666667%}.offset-lg-3{margin-left:25%}.offset-lg-4{margin-left:33.333333%}.offset-lg-5{margin-left:41.666667%}.offset-lg-6{margin-left:50%}.offset-lg-7{margin-left:58.333333%}.offset-lg-8{margin-left:66.666667%}.offset-lg-9{margin-left:75%}.offset-lg-10{margin-left:83.333333%}.offset-lg-11{margin-left:91.666667%}}@media (min-width:1200px){.col-xl{-ms-flex-preferred-size:0;flex-basis:0;-ms-flex-positive:1;flex-grow:1;max-width:100%}.col-xl-auto{-ms-flex:0 0 auto;flex:0 0 auto;width:auto;max-width:100%}.col-xl-1{-ms-flex:0 0 8.333333%;flex:0 0 8.333333%;max-width:8.333333%}.col-xl-2{-ms-flex:0 0 16.666667%;flex:0 0 16.666667%;max-width:16.666667%}.col-xl-3{-ms-flex:0 0 25%;flex:0 0 25%;max-width:25%}.col-xl-4{-ms-flex:0 0 33.333333%;flex:0 0 33.333333%;max-width:33.333333%}.col-xl-5{-ms-flex:0 0 41.666667%;flex:0 0 41.666667%;max-width:41.666667%}.col-xl-6{-ms-flex:0 0 50%;flex:0 0 50%;max-width:50%}.col-xl-7{-ms-flex:0 0 58.333333%;flex:0 0 58.333333%;max-width:58.333333%}.col-xl-8{-ms-flex:0 0 66.666667%;flex:0 0 66.666667%;max-width:66.666667%}.col-xl-9{-ms-flex:0 0 75%;flex:0 0 75%;max-width:75%}.col-xl-10{-ms-flex:0 0 83.333333%;flex:0 0 83.333333%;max-width:83.333333%}.col-xl-11{-ms-flex:0 0 91.666667%;flex:0 0 91.666667%;max-width:91.666667%}.col-xl-12{-ms-flex:0 0 100%;flex:0 0 100%;max-width:100%}.order-xl-first{-ms-flex-order:-1;order:-1}.order-xl-last{-ms-flex-order:13;order:13}.order-xl-0{-ms-flex-order:0;order:0}.order-xl-1{-ms-flex-order:1;order:1}.order-xl-2{-ms-flex-order:2;order:2}.order-xl-3{-ms-flex-order:3;order:3}.order-xl-4{-ms-flex-order:4;order:4}.order-xl-5{-ms-flex-order:5;order:5}.order-xl-6{-ms-flex-order:6;order:6}.order-xl-7{-ms-flex-order:7;order:7}.order-xl-8{-ms-flex-order:8;order:8}.order-xl-9{-ms-flex-order:9;order:9}.order-xl-10{-ms-flex-order:10;order:10}.order-xl-11{-ms-flex-order:11;order:11}.order-xl-12{-ms-flex-order:12;order:12}.offset-xl-0{margin-left:0}.offset-xl-1{margin-left:8.333333%}.offset-xl-2{margin-left:16.666667%}.offset-xl-3{margin-left:25%}.offset-xl-4{margin-left:33.333333%}.offset-xl-5{margin-left:41.666667%}.offset-xl-6{margin-left:50%}.offset-xl-7{margin-left:58.333333%}.offset-xl-8{margin-left:66.666667%}.offset-xl-9{margin-left:75%}.offset-xl-10{margin-left:83.333333%}.offset-xl-11{margin-left:91.666667%}}.d-none{display:none!important}.d-inline{display:inline!important}.d-inline-block{display:inline-block!important}.d-block{display:block!important}.d-table{display:table!important}.d-table-row{display:table-row!important}.d-table-cell{display:table-cell!important}.d-flex{display:-ms-flexbox!important;display:flex!important}.d-inline-flex{display:-ms-inline-flexbox!important;display:inline-flex!important}@media (min-width:576px){.d-sm-none{display:none!important}.d-sm-inline{display:inline!important}.d-sm-inline-block{display:inline-block!important}.d-sm-block{display:block!important}.d-sm-table{display:table!important}.d-sm-table-row{display:table-row!important}.d-sm-table-cell{display:table-cell!important}.d-sm-flex{display:-ms-flexbox!important;display:flex!important}.d-sm-inline-flex{display:-ms-inline-flexbox!important;display:inline-flex!important}}@media (min-width:768px){.d-md-none{display:none!important}.d-md-inline{display:inline!important}.d-md-inline-block{display:inline-block!important}.d-md-block{display:block!important}.d-md-table{display:table!important}.d-md-table-row{display:table-row!important}.d-md-table-cell{display:table-cell!important}.d-md-flex{display:-ms-flexbox!important;display:flex!important}.d-md-inline-flex{display:-ms-inline-flexbox!important;display:inline-flex!important}}@media (min-width:992px){.d-lg-none{display:none!important}.d-lg-inline{display:inline!important}.d-lg-inline-block{display:inline-block!important}.d-lg-block{display:block!important}.d-lg-table{display:table!important}.d-lg-table-row{display:table-row!important}.d-lg-table-cell{display:table-cell!important}.d-lg-flex{display:-ms-flexbox!important;display:flex!important}.d-lg-inline-flex{display:-ms-inline-flexbox!important;display:inline-flex!important}}@media (min-width:1200px){.d-xl-none{display:none!important}.d-xl-inline{display:inline!important}.d-xl-inline-block{display:inline-block!important}.d-xl-block{display:block!important}.d-xl-table{display:table!important}.d-xl-table-row{display:table-row!important}.d-xl-table-cell{display:table-cell!important}.d-xl-flex{display:-ms-flexbox!important;display:flex!important}.d-xl-inline-flex{display:-ms-inline-flexbox!important;display:inline-flex!important}}@media print{.d-print-none{display:none!important}.d-print-inline{display:inline!important}.d-print-inline-block{display:inline-block!important}.d-print-block{display:block!important}.d-print-table{display:table!important}.d-print-table-row{display:table-row!important}.d-print-table-cell{display:table-cell!important}.d-print-flex{display:-ms-flexbox!important;display:flex!important}.d-print-inline-flex{display:-ms-inline-flexbox!important;display:inline-flex!important}}.flex-row{-ms-flex-direction:row!important;flex-direction:row!important}.flex-column{-ms-flex-direction:column!important;flex-direction:column!important}.flex-row-reverse{-ms-flex-direction:row-reverse!important;flex-direction:row-reverse!important}.flex-column-reverse{-ms-flex-direction:column-reverse!important;flex-direction:column-reverse!important}.flex-wrap{-ms-flex-wrap:wrap!important;flex-wrap:wrap!important}.flex-nowrap{-ms-flex-wrap:nowrap!important;flex-wrap:nowrap!important}.flex-wrap-reverse{-ms-flex-wrap:wrap-reverse!important;flex-wrap:wrap-reverse!important}.flex-fill{-ms-flex:1 1 auto!important;flex:1 1 auto!important}.flex-grow-0{-ms-flex-positive:0!important;flex-grow:0!important}.flex-grow-1{-ms-flex-positive:1!important;flex-grow:1!important}.flex-shrink-0{-ms-flex-negative:0!important;flex-shrink:0!important}.flex-shrink-1{-ms-flex-negative:1!important;flex-shrink:1!important}.justify-content-start{-ms-flex-pack:start!important;justify-content:flex-start!important}.justify-content-end{-ms-flex-pack:end!important;justify-content:flex-end!important}.justify-content-center{-ms-flex-pack:center!important;justify-content:center!important}.justify-content-between{-ms-flex-pack:justify!important;justify-content:space-between!important}.justify-content-around{-ms-flex-pack:distribute!important;justify-content:space-around!important}.align-items-start{-ms-flex-align:start!important;align-items:flex-start!important}.align-items-end{-ms-flex-align:end!important;align-items:flex-end!important}.align-items-center{-ms-flex-align:center!important;align-items:center!important}.align-items-baseline{-ms-flex-align:baseline!important;align-items:baseline!important}.align-items-stretch{-ms-flex-align:stretch!important;align-items:stretch!important}.align-content-start{-ms-flex-line-pack:start!important;align-content:flex-start!important}.align-content-end{-ms-flex-line-pack:end!important;align-content:flex-end!important}.align-content-center{-ms-flex-line-pack:center!important;align-content:center!important}.align-content-between{-ms-flex-line-pack:justify!important;align-content:space-between!important}.align-content-around{-ms-flex-line-pack:distribute!important;align-content:space-around!important}.align-content-stretch{-ms-flex-line-pack:stretch!important;align-content:stretch!important}.align-self-auto{-ms-flex-item-align:auto!important;align-self:auto!important}.align-self-start{-ms-flex-item-align:start!important;align-self:flex-start!important}.align-self-end{-ms-flex-item-align:end!important;align-self:flex-end!important}.align-self-center{-ms-flex-item-align:center!important;align-self:center!important}.align-self-baseline{-ms-flex-item-align:baseline!important;align-self:baseline!important}.align-self-stretch{-ms-flex-item-align:stretch!important;align-self:stretch!important}@media (min-width:576px){.flex-sm-row{-ms-flex-direction:row!important;flex-direction:row!important}.flex-sm-column{-ms-flex-direction:column!important;flex-direction:column!important}.flex-sm-row-reverse{-ms-flex-direction:row-reverse!important;flex-direction:row-reverse!important}.flex-sm-column-reverse{-ms-flex-direction:column-reverse!important;flex-direction:column-reverse!important}.flex-sm-wrap{-ms-flex-wrap:wrap!important;flex-wrap:wrap!important}.flex-sm-nowrap{-ms-flex-wrap:nowrap!important;flex-wrap:nowrap!important}.flex-sm-wrap-reverse{-ms-flex-wrap:wrap-reverse!important;flex-wrap:wrap-reverse!important}.flex-sm-fill{-ms-flex:1 1 auto!important;flex:1 1 auto!important}.flex-sm-grow-0{-ms-flex-positive:0!important;flex-grow:0!important}.flex-sm-grow-1{-ms-flex-positive:1!important;flex-grow:1!important}.flex-sm-shrink-0{-ms-flex-negative:0!important;flex-shrink:0!important}.flex-sm-shrink-1{-ms-flex-negative:1!important;flex-shrink:1!important}.justify-content-sm-start{-ms-flex-pack:start!important;justify-content:flex-start!important}.justify-content-sm-end{-ms-flex-pack:end!important;justify-content:flex-end!important}.justify-content-sm-center{-ms-flex-pack:center!important;justify-content:center!important}.justify-content-sm-between{-ms-flex-pack:justify!important;justify-content:space-between!important}.justify-content-sm-around{-ms-flex-pack:distribute!important;justify-content:space-around!important}.align-items-sm-start{-ms-flex-align:start!important;align-items:flex-start!important}.align-items-sm-end{-ms-flex-align:end!important;align-items:flex-end!important}.align-items-sm-center{-ms-flex-align:center!important;align-items:center!important}.align-items-sm-baseline{-ms-flex-align:baseline!important;align-items:baseline!important}.align-items-sm-stretch{-ms-flex-align:stretch!important;align-items:stretch!important}.align-content-sm-start{-ms-flex-line-pack:start!important;align-content:flex-start!important}.align-content-sm-end{-ms-flex-line-pack:end!important;align-content:flex-end!important}.align-content-sm-center{-ms-flex-line-pack:center!important;align-content:center!important}.align-content-sm-between{-ms-flex-line-pack:justify!important;align-content:space-between!important}.align-content-sm-around{-ms-flex-line-pack:distribute!important;align-content:space-around!important}.align-content-sm-stretch{-ms-flex-line-pack:stretch!important;align-content:stretch!important}.align-self-sm-auto{-ms-flex-item-align:auto!important;align-self:auto!important}.align-self-sm-start{-ms-flex-item-align:start!important;align-self:flex-start!important}.align-self-sm-end{-ms-flex-item-align:end!important;align-self:flex-end!important}.align-self-sm-center{-ms-flex-item-align:center!important;align-self:center!important}.align-self-sm-baseline{-ms-flex-item-align:baseline!important;align-self:baseline!important}.align-self-sm-stretch{-ms-flex-item-align:stretch!important;align-self:stretch!important}}@media (min-width:768px){.flex-md-row{-ms-flex-direction:row!important;flex-direction:row!important}.flex-md-column{-ms-flex-direction:column!important;flex-direction:column!important}.flex-md-row-reverse{-ms-flex-direction:row-reverse!important;flex-direction:row-reverse!important}.flex-md-column-reverse{-ms-flex-direction:column-reverse!important;flex-direction:column-reverse!important}.flex-md-wrap{-ms-flex-wrap:wrap!important;flex-wrap:wrap!important}.flex-md-nowrap{-ms-flex-wrap:nowrap!important;flex-wrap:nowrap!important}.flex-md-wrap-reverse{-ms-flex-wrap:wrap-reverse!important;flex-wrap:wrap-reverse!important}.flex-md-fill{-ms-flex:1 1 auto!important;flex:1 1 auto!important}.flex-md-grow-0{-ms-flex-positive:0!important;flex-grow:0!important}.flex-md-grow-1{-ms-flex-positive:1!important;flex-grow:1!important}.flex-md-shrink-0{-ms-flex-negative:0!important;flex-shrink:0!important}.flex-md-shrink-1{-ms-flex-negative:1!important;flex-shrink:1!important}.justify-content-md-start{-ms-flex-pack:start!important;justify-content:flex-start!important}.justify-content-md-end{-ms-flex-pack:end!important;justify-content:flex-end!important}.justify-content-md-center{-ms-flex-pack:center!important;justify-content:center!important}.justify-content-md-between{-ms-flex-pack:justify!important;justify-content:space-between!important}.justify-content-md-around{-ms-flex-pack:distribute!important;justify-content:space-around!important}.align-items-md-start{-ms-flex-align:start!important;align-items:flex-start!important}.align-items-md-end{-ms-flex-align:end!important;align-items:flex-end!important}.align-items-md-center{-ms-flex-align:center!important;align-items:center!important}.align-items-md-baseline{-ms-flex-align:baseline!important;align-items:baseline!important}.align-items-md-stretch{-ms-flex-align:stretch!important;align-items:stretch!important}.align-content-md-start{-ms-flex-line-pack:start!important;align-content:flex-start!important}.align-content-md-end{-ms-flex-line-pack:end!important;align-content:flex-end!important}.align-content-md-center{-ms-flex-line-pack:center!important;align-content:center!important}.align-content-md-between{-ms-flex-line-pack:justify!important;align-content:space-between!important}.align-content-md-around{-ms-flex-line-pack:distribute!important;align-content:space-around!important}.align-content-md-stretch{-ms-flex-line-pack:stretch!important;align-content:stretch!important}.align-self-md-auto{-ms-flex-item-align:auto!important;align-self:auto!important}.align-self-md-start{-ms-flex-item-align:start!important;align-self:flex-start!important}.align-self-md-end{-ms-flex-item-align:end!important;align-self:flex-end!important}.align-self-md-center{-ms-flex-item-align:center!important;align-self:center!important}.align-self-md-baseline{-ms-flex-item-align:baseline!important;align-self:baseline!important}.align-self-md-stretch{-ms-flex-item-align:stretch!important;align-self:stretch!important}}@media (min-width:992px){.flex-lg-row{-ms-flex-direction:row!important;flex-direction:row!important}.flex-lg-column{-ms-flex-direction:column!important;flex-direction:column!important}.flex-lg-row-reverse{-ms-flex-direction:row-reverse!important;flex-direction:row-reverse!important}.flex-lg-column-reverse{-ms-flex-direction:column-reverse!important;flex-direction:column-reverse!important}.flex-lg-wrap{-ms-flex-wrap:wrap!important;flex-wrap:wrap!important}.flex-lg-nowrap{-ms-flex-wrap:nowrap!important;flex-wrap:nowrap!important}.flex-lg-wrap-reverse{-ms-flex-wrap:wrap-reverse!important;flex-wrap:wrap-reverse!important}.flex-lg-fill{-ms-flex:1 1 auto!important;flex:1 1 auto!important}.flex-lg-grow-0{-ms-flex-positive:0!important;flex-grow:0!important}.flex-lg-grow-1{-ms-flex-positive:1!important;flex-grow:1!important}.flex-lg-shrink-0{-ms-flex-negative:0!important;flex-shrink:0!important}.flex-lg-shrink-1{-ms-flex-negative:1!important;flex-shrink:1!important}.justify-content-lg-start{-ms-flex-pack:start!important;justify-content:flex-start!important}.justify-content-lg-end{-ms-flex-pack:end!important;justify-content:flex-end!important}.justify-content-lg-center{-ms-flex-pack:center!important;justify-content:center!important}.justify-content-lg-between{-ms-flex-pack:justify!important;justify-content:space-between!important}.justify-content-lg-around{-ms-flex-pack:distribute!important;justify-content:space-around!important}.align-items-lg-start{-ms-flex-align:start!important;align-items:flex-start!important}.align-items-lg-end{-ms-flex-align:end!important;align-items:flex-end!important}.align-items-lg-center{-ms-flex-align:center!important;align-items:center!important}.align-items-lg-baseline{-ms-flex-align:baseline!important;align-items:baseline!important}.align-items-lg-stretch{-ms-flex-align:stretch!important;align-items:stretch!important}.align-content-lg-start{-ms-flex-line-pack:start!important;align-content:flex-start!important}.align-content-lg-end{-ms-flex-line-pack:end!important;align-content:flex-end!important}.align-content-lg-center{-ms-flex-line-pack:center!important;align-content:center!important}.align-content-lg-between{-ms-flex-line-pack:justify!important;align-content:space-between!important}.align-content-lg-around{-ms-flex-line-pack:distribute!important;align-content:space-around!important}.align-content-lg-stretch{-ms-flex-line-pack:stretch!important;align-content:stretch!important}.align-self-lg-auto{-ms-flex-item-align:auto!important;align-self:auto!important}.align-self-lg-start{-ms-flex-item-align:start!important;align-self:flex-start!important}.align-self-lg-end{-ms-flex-item-align:end!important;align-self:flex-end!important}.align-self-lg-center{-ms-flex-item-align:center!important;align-self:center!important}.align-self-lg-baseline{-ms-flex-item-align:baseline!important;align-self:baseline!important}.align-self-lg-stretch{-ms-flex-item-align:stretch!important;align-self:stretch!important}}@media (min-width:1200px){.flex-xl-row{-ms-flex-direction:row!important;flex-direction:row!important}.flex-xl-column{-ms-flex-direction:column!important;flex-direction:column!important}.flex-xl-row-reverse{-ms-flex-direction:row-reverse!important;flex-direction:row-reverse!important}.flex-xl-column-reverse{-ms-flex-direction:column-reverse!important;flex-direction:column-reverse!important}.flex-xl-wrap{-ms-flex-wrap:wrap!important;flex-wrap:wrap!important}.flex-xl-nowrap{-ms-flex-wrap:nowrap!important;flex-wrap:nowrap!important}.flex-xl-wrap-reverse{-ms-flex-wrap:wrap-reverse!important;flex-wrap:wrap-reverse!important}.flex-xl-fill{-ms-flex:1 1 auto!important;flex:1 1 auto!important}.flex-xl-grow-0{-ms-flex-positive:0!important;flex-grow:0!important}.flex-xl-grow-1{-ms-flex-positive:1!important;flex-grow:1!important}.flex-xl-shrink-0{-ms-flex-negative:0!important;flex-shrink:0!important}.flex-xl-shrink-1{-ms-flex-negative:1!important;flex-shrink:1!important}.justify-content-xl-start{-ms-flex-pack:start!important;justify-content:flex-start!important}.justify-content-xl-end{-ms-flex-pack:end!important;justify-content:flex-end!important}.justify-content-xl-center{-ms-flex-pack:center!important;justify-content:center!important}.justify-content-xl-between{-ms-flex-pack:justify!important;justify-content:space-between!important}.justify-content-xl-around{-ms-flex-pack:distribute!important;justify-content:space-around!important}.align-items-xl-start{-ms-flex-align:start!important;align-items:flex-start!important}.align-items-xl-end{-ms-flex-align:end!important;align-items:flex-end!important}.align-items-xl-center{-ms-flex-align:center!important;align-items:center!important}.align-items-xl-baseline{-ms-flex-align:baseline!important;align-items:baseline!important}.align-items-xl-stretch{-ms-flex-align:stretch!important;align-items:stretch!important}.align-content-xl-start{-ms-flex-line-pack:start!important;align-content:flex-start!important}.align-content-xl-end{-ms-flex-line-pack:end!important;align-content:flex-end!important}.align-content-xl-center{-ms-flex-line-pack:center!important;align-content:center!important}.align-content-xl-between{-ms-flex-line-pack:justify!important;align-content:space-between!important}.align-content-xl-around{-ms-flex-line-pack:distribute!important;align-content:space-around!important}.align-content-xl-stretch{-ms-flex-line-pack:stretch!important;align-content:stretch!important}.align-self-xl-auto{-ms-flex-item-align:auto!important;align-self:auto!important}.align-self-xl-start{-ms-flex-item-align:start!important;align-self:flex-start!important}.align-self-xl-end{-ms-flex-item-align:end!important;align-self:flex-end!important}.align-self-xl-center{-ms-flex-item-align:center!important;align-self:center!important}.align-self-xl-baseline{-ms-flex-item-align:baseline!important;align-self:baseline!important}.align-self-xl-stretch{-ms-flex-item-align:stretch!important;align-self:stretch!important}}.m-0{margin:0!important}.mt-0,.my-0{margin-top:0!important}.mr-0,.mx-0{margin-right:0!important}.mb-0,.my-0{margin-bottom:0!important}.ml-0,.mx-0{margin-left:0!important}.m-1{margin:.25rem!important}.mt-1,.my-1{margin-top:.25rem!important}.mr-1,.mx-1{margin-right:.25rem!important}.mb-1,.my-1{margin-bottom:.25rem!important}.ml-1,.mx-1{margin-left:.25rem!important}.m-2{margin:.5rem!important}.mt-2,.my-2{margin-top:.5rem!important}.mr-2,.mx-2{margin-right:.5rem!important}.mb-2,.my-2{margin-bottom:.5rem!important}.ml-2,.mx-2{margin-left:.5rem!important}.m-3{margin:1rem!important}.mt-3,.my-3{margin-top:1rem!important}.mr-3,.mx-3{margin-right:1rem!important}.mb-3,.my-3{margin-bottom:1rem!important}.ml-3,.mx-3{margin-left:1rem!important}.m-4{margin:1.5rem!important}.mt-4,.my-4{margin-top:1.5rem!important}.mr-4,.mx-4{margin-right:1.5rem!important}.mb-4,.my-4{margin-bottom:1.5rem!important}.ml-4,.mx-4{margin-left:1.5rem!important}.m-5{margin:3rem!important}.mt-5,.my-5{margin-top:3rem!important}.mr-5,.mx-5{margin-right:3rem!important}.mb-5,.my-5{margin-bottom:3rem!important}.ml-5,.mx-5{margin-left:3rem!important}.p-0{padding:0!important}.pt-0,.py-0{padding-top:0!important}.pr-0,.px-0{padding-right:0!important}.pb-0,.py-0{padding-bottom:0!important}.pl-0,.px-0{padding-left:0!important}.p-1{padding:.25rem!important}.pt-1,.py-1{padding-top:.25rem!important}.pr-1,.px-1{padding-right:.25rem!important}.pb-1,.py-1{padding-bottom:.25rem!important}.pl-1,.px-1{padding-left:.25rem!important}.p-2{padding:.5rem!important}.pt-2,.py-2{padding-top:.5rem!important}.pr-2,.px-2{padding-right:.5rem!important}.pb-2,.py-2{padding-bottom:.5rem!important}.pl-2,.px-2{padding-left:.5rem!important}.p-3{padding:1rem!important}.pt-3,.py-3{padding-top:1rem!important}.pr-3,.px-3{padding-right:1rem!important}.pb-3,.py-3{padding-bottom:1rem!important}.pl-3,.px-3{padding-left:1rem!important}.p-4{padding:1.5rem!important}.pt-4,.py-4{padding-top:1.5rem!important}.pr-4,.px-4{padding-right:1.5rem!important}.pb-4,.py-4{padding-bottom:1.5rem!important}.pl-4,.px-4{padding-left:1.5rem!important}.p-5{padding:3rem!important}.pt-5,.py-5{padding-top:3rem!important}.pr-5,.px-5{padding-right:3rem!important}.pb-5,.py-5{padding-bottom:3rem!important}.pl-5,.px-5{padding-left:3rem!important}.m-n1{margin:-.25rem!important}.mt-n1,.my-n1{margin-top:-.25rem!important}.mr-n1,.mx-n1{margin-right:-.25rem!important}.mb-n1,.my-n1{margin-bottom:-.25rem!important}.ml-n1,.mx-n1{margin-left:-.25rem!important}.m-n2{margin:-.5rem!important}.mt-n2,.my-n2{margin-top:-.5rem!important}.mr-n2,.mx-n2{margin-right:-.5rem!important}.mb-n2,.my-n2{margin-bottom:-.5rem!important}.ml-n2,.mx-n2{margin-left:-.5rem!important}.m-n3{margin:-1rem!important}.mt-n3,.my-n3{margin-top:-1rem!important}.mr-n3,.mx-n3{margin-right:-1rem!important}.mb-n3,.my-n3{margin-bottom:-1rem!important}.ml-n3,.mx-n3{margin-left:-1rem!important}.m-n4{margin:-1.5rem!important}.mt-n4,.my-n4{margin-top:-1.5rem!important}.mr-n4,.mx-n4{margin-right:-1.5rem!important}.mb-n4,.my-n4{margin-bottom:-1.5rem!important}.ml-n4,.mx-n4{margin-left:-1.5rem!important}.m-n5{margin:-3rem!important}.mt-n5,.my-n5{margin-top:-3rem!important}.mr-n5,.mx-n5{margin-right:-3rem!important}.mb-n5,.my-n5{margin-bottom:-3rem!important}.ml-n5,.mx-n5{margin-left:-3rem!important}.m-auto{margin:auto!important}.mt-auto,.my-auto{margin-top:auto!important}.mr-auto,.mx-auto{margin-right:auto!important}.mb-auto,.my-auto{margin-bottom:auto!important}.ml-auto,.mx-auto{margin-left:auto!important}@media (min-width:576px){.m-sm-0{margin:0!important}.mt-sm-0,.my-sm-0{margin-top:0!important}.mr-sm-0,.mx-sm-0{margin-right:0!important}.mb-sm-0,.my-sm-0{margin-bottom:0!important}.ml-sm-0,.mx-sm-0{margin-left:0!important}.m-sm-1{margin:.25rem!important}.mt-sm-1,.my-sm-1{margin-top:.25rem!important}.mr-sm-1,.mx-sm-1{margin-right:.25rem!important}.mb-sm-1,.my-sm-1{margin-bottom:.25rem!important}.ml-sm-1,.mx-sm-1{margin-left:.25rem!important}.m-sm-2{margin:.5rem!important}.mt-sm-2,.my-sm-2{margin-top:.5rem!important}.mr-sm-2,.mx-sm-2{margin-right:.5rem!important}.mb-sm-2,.my-sm-2{margin-bottom:.5rem!important}.ml-sm-2,.mx-sm-2{margin-left:.5rem!important}.m-sm-3{margin:1rem!important}.mt-sm-3,.my-sm-3{margin-top:1rem!important}.mr-sm-3,.mx-sm-3{margin-right:1rem!important}.mb-sm-3,.my-sm-3{margin-bottom:1rem!important}.ml-sm-3,.mx-sm-3{margin-left:1rem!important}.m-sm-4{margin:1.5rem!important}.mt-sm-4,.my-sm-4{margin-top:1.5rem!important}.mr-sm-4,.mx-sm-4{margin-right:1.5rem!important}.mb-sm-4,.my-sm-4{margin-bottom:1.5rem!important}.ml-sm-4,.mx-sm-4{margin-left:1.5rem!important}.m-sm-5{margin:3rem!important}.mt-sm-5,.my-sm-5{margin-top:3rem!important}.mr-sm-5,.mx-sm-5{margin-right:3rem!important}.mb-sm-5,.my-sm-5{margin-bottom:3rem!important}.ml-sm-5,.mx-sm-5{margin-left:3rem!important}.p-sm-0{padding:0!important}.pt-sm-0,.py-sm-0{padding-top:0!important}.pr-sm-0,.px-sm-0{padding-right:0!important}.pb-sm-0,.py-sm-0{padding-bottom:0!important}.pl-sm-0,.px-sm-0{padding-left:0!important}.p-sm-1{padding:.25rem!important}.pt-sm-1,.py-sm-1{padding-top:.25rem!important}.pr-sm-1,.px-sm-1{padding-right:.25rem!important}.pb-sm-1,.py-sm-1{padding-bottom:.25rem!important}.pl-sm-1,.px-sm-1{padding-left:.25rem!important}.p-sm-2{padding:.5rem!important}.pt-sm-2,.py-sm-2{padding-top:.5rem!important}.pr-sm-2,.px-sm-2{padding-right:.5rem!important}.pb-sm-2,.py-sm-2{padding-bottom:.5rem!important}.pl-sm-2,.px-sm-2{padding-left:.5rem!important}.p-sm-3{padding:1rem!important}.pt-sm-3,.py-sm-3{padding-top:1rem!important}.pr-sm-3,.px-sm-3{padding-right:1rem!important}.pb-sm-3,.py-sm-3{padding-bottom:1rem!important}.pl-sm-3,.px-sm-3{padding-left:1rem!important}.p-sm-4{padding:1.5rem!important}.pt-sm-4,.py-sm-4{padding-top:1.5rem!important}.pr-sm-4,.px-sm-4{padding-right:1.5rem!important}.pb-sm-4,.py-sm-4{padding-bottom:1.5rem!important}.pl-sm-4,.px-sm-4{padding-left:1.5rem!important}.p-sm-5{padding:3rem!important}.pt-sm-5,.py-sm-5{padding-top:3rem!important}.pr-sm-5,.px-sm-5{padding-right:3rem!important}.pb-sm-5,.py-sm-5{padding-bottom:3rem!important}.pl-sm-5,.px-sm-5{padding-left:3rem!important}.m-sm-n1{margin:-.25rem!important}.mt-sm-n1,.my-sm-n1{margin-top:-.25rem!important}.mr-sm-n1,.mx-sm-n1{margin-right:-.25rem!important}.mb-sm-n1,.my-sm-n1{margin-bottom:-.25rem!important}.ml-sm-n1,.mx-sm-n1{margin-left:-.25rem!important}.m-sm-n2{margin:-.5rem!important}.mt-sm-n2,.my-sm-n2{margin-top:-.5rem!important}.mr-sm-n2,.mx-sm-n2{margin-right:-.5rem!important}.mb-sm-n2,.my-sm-n2{margin-bottom:-.5rem!important}.ml-sm-n2,.mx-sm-n2{margin-left:-.5rem!important}.m-sm-n3{margin:-1rem!important}.mt-sm-n3,.my-sm-n3{margin-top:-1rem!important}.mr-sm-n3,.mx-sm-n3{margin-right:-1rem!important}.mb-sm-n3,.my-sm-n3{margin-bottom:-1rem!important}.ml-sm-n3,.mx-sm-n3{margin-left:-1rem!important}.m-sm-n4{margin:-1.5rem!important}.mt-sm-n4,.my-sm-n4{margin-top:-1.5rem!important}.mr-sm-n4,.mx-sm-n4{margin-right:-1.5rem!important}.mb-sm-n4,.my-sm-n4{margin-bottom:-1.5rem!important}.ml-sm-n4,.mx-sm-n4{margin-left:-1.5rem!important}.m-sm-n5{margin:-3rem!important}.mt-sm-n5,.my-sm-n5{margin-top:-3rem!important}.mr-sm-n5,.mx-sm-n5{margin-right:-3rem!important}.mb-sm-n5,.my-sm-n5{margin-bottom:-3rem!important}.ml-sm-n5,.mx-sm-n5{margin-left:-3rem!important}.m-sm-auto{margin:auto!important}.mt-sm-auto,.my-sm-auto{margin-top:auto!important}.mr-sm-auto,.mx-sm-auto{margin-right:auto!important}.mb-sm-auto,.my-sm-auto{margin-bottom:auto!important}.ml-sm-auto,.mx-sm-auto{margin-left:auto!important}}@media (min-width:768px){.m-md-0{margin:0!important}.mt-md-0,.my-md-0{margin-top:0!important}.mr-md-0,.mx-md-0{margin-right:0!important}.mb-md-0,.my-md-0{margin-bottom:0!important}.ml-md-0,.mx-md-0{margin-left:0!important}.m-md-1{margin:.25rem!important}.mt-md-1,.my-md-1{margin-top:.25rem!important}.mr-md-1,.mx-md-1{margin-right:.25rem!important}.mb-md-1,.my-md-1{margin-bottom:.25rem!important}.ml-md-1,.mx-md-1{margin-left:.25rem!important}.m-md-2{margin:.5rem!important}.mt-md-2,.my-md-2{margin-top:.5rem!important}.mr-md-2,.mx-md-2{margin-right:.5rem!important}.mb-md-2,.my-md-2{margin-bottom:.5rem!important}.ml-md-2,.mx-md-2{margin-left:.5rem!important}.m-md-3{margin:1rem!important}.mt-md-3,.my-md-3{margin-top:1rem!important}.mr-md-3,.mx-md-3{margin-right:1rem!important}.mb-md-3,.my-md-3{margin-bottom:1rem!important}.ml-md-3,.mx-md-3{margin-left:1rem!important}.m-md-4{margin:1.5rem!important}.mt-md-4,.my-md-4{margin-top:1.5rem!important}.mr-md-4,.mx-md-4{margin-right:1.5rem!important}.mb-md-4,.my-md-4{margin-bottom:1.5rem!important}.ml-md-4,.mx-md-4{margin-left:1.5rem!important}.m-md-5{margin:3rem!important}.mt-md-5,.my-md-5{margin-top:3rem!important}.mr-md-5,.mx-md-5{margin-right:3rem!important}.mb-md-5,.my-md-5{margin-bottom:3rem!important}.ml-md-5,.mx-md-5{margin-left:3rem!important}.p-md-0{padding:0!important}.pt-md-0,.py-md-0{padding-top:0!important}.pr-md-0,.px-md-0{padding-right:0!important}.pb-md-0,.py-md-0{padding-bottom:0!important}.pl-md-0,.px-md-0{padding-left:0!important}.p-md-1{padding:.25rem!important}.pt-md-1,.py-md-1{padding-top:.25rem!important}.pr-md-1,.px-md-1{padding-right:.25rem!important}.pb-md-1,.py-md-1{padding-bottom:.25rem!important}.pl-md-1,.px-md-1{padding-left:.25rem!important}.p-md-2{padding:.5rem!important}.pt-md-2,.py-md-2{padding-top:.5rem!important}.pr-md-2,.px-md-2{padding-right:.5rem!important}.pb-md-2,.py-md-2{padding-bottom:.5rem!important}.pl-md-2,.px-md-2{padding-left:.5rem!important}.p-md-3{padding:1rem!important}.pt-md-3,.py-md-3{padding-top:1rem!important}.pr-md-3,.px-md-3{padding-right:1rem!important}.pb-md-3,.py-md-3{padding-bottom:1rem!important}.pl-md-3,.px-md-3{padding-left:1rem!important}.p-md-4{padding:1.5rem!important}.pt-md-4,.py-md-4{padding-top:1.5rem!important}.pr-md-4,.px-md-4{padding-right:1.5rem!important}.pb-md-4,.py-md-4{padding-bottom:1.5rem!important}.pl-md-4,.px-md-4{padding-left:1.5rem!important}.p-md-5{padding:3rem!important}.pt-md-5,.py-md-5{padding-top:3rem!important}.pr-md-5,.px-md-5{padding-right:3rem!important}.pb-md-5,.py-md-5{padding-bottom:3rem!important}.pl-md-5,.px-md-5{padding-left:3rem!important}.m-md-n1{margin:-.25rem!important}.mt-md-n1,.my-md-n1{margin-top:-.25rem!important}.mr-md-n1,.mx-md-n1{margin-right:-.25rem!important}.mb-md-n1,.my-md-n1{margin-bottom:-.25rem!important}.ml-md-n1,.mx-md-n1{margin-left:-.25rem!important}.m-md-n2{margin:-.5rem!important}.mt-md-n2,.my-md-n2{margin-top:-.5rem!important}.mr-md-n2,.mx-md-n2{margin-right:-.5rem!important}.mb-md-n2,.my-md-n2{margin-bottom:-.5rem!important}.ml-md-n2,.mx-md-n2{margin-left:-.5rem!important}.m-md-n3{margin:-1rem!important}.mt-md-n3,.my-md-n3{margin-top:-1rem!important}.mr-md-n3,.mx-md-n3{margin-right:-1rem!important}.mb-md-n3,.my-md-n3{margin-bottom:-1rem!important}.ml-md-n3,.mx-md-n3{margin-left:-1rem!important}.m-md-n4{margin:-1.5rem!important}.mt-md-n4,.my-md-n4{margin-top:-1.5rem!important}.mr-md-n4,.mx-md-n4{margin-right:-1.5rem!important}.mb-md-n4,.my-md-n4{margin-bottom:-1.5rem!important}.ml-md-n4,.mx-md-n4{margin-left:-1.5rem!important}.m-md-n5{margin:-3rem!important}.mt-md-n5,.my-md-n5{margin-top:-3rem!important}.mr-md-n5,.mx-md-n5{margin-right:-3rem!important}.mb-md-n5,.my-md-n5{margin-bottom:-3rem!important}.ml-md-n5,.mx-md-n5{margin-left:-3rem!important}.m-md-auto{margin:auto!important}.mt-md-auto,.my-md-auto{margin-top:auto!important}.mr-md-auto,.mx-md-auto{margin-right:auto!important}.mb-md-auto,.my-md-auto{margin-bottom:auto!important}.ml-md-auto,.mx-md-auto{margin-left:auto!important}}@media (min-width:992px){.m-lg-0{margin:0!important}.mt-lg-0,.my-lg-0{margin-top:0!important}.mr-lg-0,.mx-lg-0{margin-right:0!important}.mb-lg-0,.my-lg-0{margin-bottom:0!important}.ml-lg-0,.mx-lg-0{margin-left:0!important}.m-lg-1{margin:.25rem!important}.mt-lg-1,.my-lg-1{margin-top:.25rem!important}.mr-lg-1,.mx-lg-1{margin-right:.25rem!important}.mb-lg-1,.my-lg-1{margin-bottom:.25rem!important}.ml-lg-1,.mx-lg-1{margin-left:.25rem!important}.m-lg-2{margin:.5rem!important}.mt-lg-2,.my-lg-2{margin-top:.5rem!important}.mr-lg-2,.mx-lg-2{margin-right:.5rem!important}.mb-lg-2,.my-lg-2{margin-bottom:.5rem!important}.ml-lg-2,.mx-lg-2{margin-left:.5rem!important}.m-lg-3{margin:1rem!important}.mt-lg-3,.my-lg-3{margin-top:1rem!important}.mr-lg-3,.mx-lg-3{margin-right:1rem!important}.mb-lg-3,.my-lg-3{margin-bottom:1rem!important}.ml-lg-3,.mx-lg-3{margin-left:1rem!important}.m-lg-4{margin:1.5rem!important}.mt-lg-4,.my-lg-4{margin-top:1.5rem!important}.mr-lg-4,.mx-lg-4{margin-right:1.5rem!important}.mb-lg-4,.my-lg-4{margin-bottom:1.5rem!important}.ml-lg-4,.mx-lg-4{margin-left:1.5rem!important}.m-lg-5{margin:3rem!important}.mt-lg-5,.my-lg-5{margin-top:3rem!important}.mr-lg-5,.mx-lg-5{margin-right:3rem!important}.mb-lg-5,.my-lg-5{margin-bottom:3rem!important}.ml-lg-5,.mx-lg-5{margin-left:3rem!important}.p-lg-0{padding:0!important}.pt-lg-0,.py-lg-0{padding-top:0!important}.pr-lg-0,.px-lg-0{padding-right:0!important}.pb-lg-0,.py-lg-0{padding-bottom:0!important}.pl-lg-0,.px-lg-0{padding-left:0!important}.p-lg-1{padding:.25rem!important}.pt-lg-1,.py-lg-1{padding-top:.25rem!important}.pr-lg-1,.px-lg-1{padding-right:.25rem!important}.pb-lg-1,.py-lg-1{padding-bottom:.25rem!important}.pl-lg-1,.px-lg-1{padding-left:.25rem!important}.p-lg-2{padding:.5rem!important}.pt-lg-2,.py-lg-2{padding-top:.5rem!important}.pr-lg-2,.px-lg-2{padding-right:.5rem!important}.pb-lg-2,.py-lg-2{padding-bottom:.5rem!important}.pl-lg-2,.px-lg-2{padding-left:.5rem!important}.p-lg-3{padding:1rem!important}.pt-lg-3,.py-lg-3{padding-top:1rem!important}.pr-lg-3,.px-lg-3{padding-right:1rem!important}.pb-lg-3,.py-lg-3{padding-bottom:1rem!important}.pl-lg-3,.px-lg-3{padding-left:1rem!important}.p-lg-4{padding:1.5rem!important}.pt-lg-4,.py-lg-4{padding-top:1.5rem!important}.pr-lg-4,.px-lg-4{padding-right:1.5rem!important}.pb-lg-4,.py-lg-4{padding-bottom:1.5rem!important}.pl-lg-4,.px-lg-4{padding-left:1.5rem!important}.p-lg-5{padding:3rem!important}.pt-lg-5,.py-lg-5{padding-top:3rem!important}.pr-lg-5,.px-lg-5{padding-right:3rem!important}.pb-lg-5,.py-lg-5{padding-bottom:3rem!important}.pl-lg-5,.px-lg-5{padding-left:3rem!important}.m-lg-n1{margin:-.25rem!important}.mt-lg-n1,.my-lg-n1{margin-top:-.25rem!important}.mr-lg-n1,.mx-lg-n1{margin-right:-.25rem!important}.mb-lg-n1,.my-lg-n1{margin-bottom:-.25rem!important}.ml-lg-n1,.mx-lg-n1{margin-left:-.25rem!important}.m-lg-n2{margin:-.5rem!important}.mt-lg-n2,.my-lg-n2{margin-top:-.5rem!important}.mr-lg-n2,.mx-lg-n2{margin-right:-.5rem!important}.mb-lg-n2,.my-lg-n2{margin-bottom:-.5rem!important}.ml-lg-n2,.mx-lg-n2{margin-left:-.5rem!important}.m-lg-n3{margin:-1rem!important}.mt-lg-n3,.my-lg-n3{margin-top:-1rem!important}.mr-lg-n3,.mx-lg-n3{margin-right:-1rem!important}.mb-lg-n3,.my-lg-n3{margin-bottom:-1rem!important}.ml-lg-n3,.mx-lg-n3{margin-left:-1rem!important}.m-lg-n4{margin:-1.5rem!important}.mt-lg-n4,.my-lg-n4{margin-top:-1.5rem!important}.mr-lg-n4,.mx-lg-n4{margin-right:-1.5rem!important}.mb-lg-n4,.my-lg-n4{margin-bottom:-1.5rem!important}.ml-lg-n4,.mx-lg-n4{margin-left:-1.5rem!important}.m-lg-n5{margin:-3rem!important}.mt-lg-n5,.my-lg-n5{margin-top:-3rem!important}.mr-lg-n5,.mx-lg-n5{margin-right:-3rem!important}.mb-lg-n5,.my-lg-n5{margin-bottom:-3rem!important}.ml-lg-n5,.mx-lg-n5{margin-left:-3rem!important}.m-lg-auto{margin:auto!important}.mt-lg-auto,.my-lg-auto{margin-top:auto!important}.mr-lg-auto,.mx-lg-auto{margin-right:auto!important}.mb-lg-auto,.my-lg-auto{margin-bottom:auto!important}.ml-lg-auto,.mx-lg-auto{margin-left:auto!important}}@media (min-width:1200px){.m-xl-0{margin:0!important}.mt-xl-0,.my-xl-0{margin-top:0!important}.mr-xl-0,.mx-xl-0{margin-right:0!important}.mb-xl-0,.my-xl-0{margin-bottom:0!important}.ml-xl-0,.mx-xl-0{margin-left:0!important}.m-xl-1{margin:.25rem!important}.mt-xl-1,.my-xl-1{margin-top:.25rem!important}.mr-xl-1,.mx-xl-1{margin-right:.25rem!important}.mb-xl-1,.my-xl-1{margin-bottom:.25rem!important}.ml-xl-1,.mx-xl-1{margin-left:.25rem!important}.m-xl-2{margin:.5rem!important}.mt-xl-2,.my-xl-2{margin-top:.5rem!important}.mr-xl-2,.mx-xl-2{margin-right:.5rem!important}.mb-xl-2,.my-xl-2{margin-bottom:.5rem!important}.ml-xl-2,.mx-xl-2{margin-left:.5rem!important}.m-xl-3{margin:1rem!important}.mt-xl-3,.my-xl-3{margin-top:1rem!important}.mr-xl-3,.mx-xl-3{margin-right:1rem!important}.mb-xl-3,.my-xl-3{margin-bottom:1rem!important}.ml-xl-3,.mx-xl-3{margin-left:1rem!important}.m-xl-4{margin:1.5rem!important}.mt-xl-4,.my-xl-4{margin-top:1.5rem!important}.mr-xl-4,.mx-xl-4{margin-right:1.5rem!important}.mb-xl-4,.my-xl-4{margin-bottom:1.5rem!important}.ml-xl-4,.mx-xl-4{margin-left:1.5rem!important}.m-xl-5{margin:3rem!important}.mt-xl-5,.my-xl-5{margin-top:3rem!important}.mr-xl-5,.mx-xl-5{margin-right:3rem!important}.mb-xl-5,.my-xl-5{margin-bottom:3rem!important}.ml-xl-5,.mx-xl-5{margin-left:3rem!important}.p-xl-0{padding:0!important}.pt-xl-0,.py-xl-0{padding-top:0!important}.pr-xl-0,.px-xl-0{padding-right:0!important}.pb-xl-0,.py-xl-0{padding-bottom:0!important}.pl-xl-0,.px-xl-0{padding-left:0!important}.p-xl-1{padding:.25rem!important}.pt-xl-1,.py-xl-1{padding-top:.25rem!important}.pr-xl-1,.px-xl-1{padding-right:.25rem!important}.pb-xl-1,.py-xl-1{padding-bottom:.25rem!important}.pl-xl-1,.px-xl-1{padding-left:.25rem!important}.p-xl-2{padding:.5rem!important}.pt-xl-2,.py-xl-2{padding-top:.5rem!important}.pr-xl-2,.px-xl-2{padding-right:.5rem!important}.pb-xl-2,.py-xl-2{padding-bottom:.5rem!important}.pl-xl-2,.px-xl-2{padding-left:.5rem!important}.p-xl-3{padding:1rem!important}.pt-xl-3,.py-xl-3{padding-top:1rem!important}.pr-xl-3,.px-xl-3{padding-right:1rem!important}.pb-xl-3,.py-xl-3{padding-bottom:1rem!important}.pl-xl-3,.px-xl-3{padding-left:1rem!important}.p-xl-4{padding:1.5rem!important}.pt-xl-4,.py-xl-4{padding-top:1.5rem!important}.pr-xl-4,.px-xl-4{padding-right:1.5rem!important}.pb-xl-4,.py-xl-4{padding-bottom:1.5rem!important}.pl-xl-4,.px-xl-4{padding-left:1.5rem!important}.p-xl-5{padding:3rem!important}.pt-xl-5,.py-xl-5{padding-top:3rem!important}.pr-xl-5,.px-xl-5{padding-right:3rem!important}.pb-xl-5,.py-xl-5{padding-bottom:3rem!important}.pl-xl-5,.px-xl-5{padding-left:3rem!important}.m-xl-n1{margin:-.25rem!important}.mt-xl-n1,.my-xl-n1{margin-top:-.25rem!important}.mr-xl-n1,.mx-xl-n1{margin-right:-.25rem!important}.mb-xl-n1,.my-xl-n1{margin-bottom:-.25rem!important}.ml-xl-n1,.mx-xl-n1{margin-left:-.25rem!important}.m-xl-n2{margin:-.5rem!important}.mt-xl-n2,.my-xl-n2{margin-top:-.5rem!important}.mr-xl-n2,.mx-xl-n2{margin-right:-.5rem!important}.mb-xl-n2,.my-xl-n2{margin-bottom:-.5rem!important}.ml-xl-n2,.mx-xl-n2{margin-left:-.5rem!important}.m-xl-n3{margin:-1rem!important}.mt-xl-n3,.my-xl-n3{margin-top:-1rem!important}.mr-xl-n3,.mx-xl-n3{margin-right:-1rem!important}.mb-xl-n3,.my-xl-n3{margin-bottom:-1rem!important}.ml-xl-n3,.mx-xl-n3{margin-left:-1rem!important}.m-xl-n4{margin:-1.5rem!important}.mt-xl-n4,.my-xl-n4{margin-top:-1.5rem!important}.mr-xl-n4,.mx-xl-n4{margin-right:-1.5rem!important}.mb-xl-n4,.my-xl-n4{margin-bottom:-1.5rem!important}.ml-xl-n4,.mx-xl-n4{margin-left:-1.5rem!important}.m-xl-n5{margin:-3rem!important}.mt-xl-n5,.my-xl-n5{margin-top:-3rem!important}.mr-xl-n5,.mx-xl-n5{margin-right:-3rem!important}.mb-xl-n5,.my-xl-n5{margin-bottom:-3rem!important}.ml-xl-n5,.mx-xl-n5{margin-left:-3rem!important}.m-xl-auto{margin:auto!important}.mt-xl-auto,.my-xl-auto{margin-top:auto!important}.mr-xl-auto,.mx-xl-auto{margin-right:auto!important}.mb-xl-auto,.my-xl-auto{margin-bottom:auto!important}.ml-xl-auto,.mx-xl-auto{margin-left:auto!important}}
/*# sourceMappingURL=bootstrap-grid.min.css.map */
  `;
}
export function generateTailwindCss() {
    return `
    /*
! tailwindcss v3.4.9 | MIT License | https://tailwindcss.com
*/
*,
:after,
:before {
    box-sizing: border-box;
    border: 0 solid #e5e7eb
}

:after,
:before {
    --tw-content: ""
}

:host,
html {
    line-height: 1.5;
    -webkit-text-size-adjust: 100%;
    -moz-tab-size: 4;
    tab-size: 4;
    font-family: ui-sans-serif, system-ui, sans-serif, Apple Color Emoji, Segoe UI Emoji, Segoe UI Symbol, Noto Color Emoji;
    font-feature-settings: normal;
    font-variation-settings: normal;
    -webkit-tap-highlight-color: transparent
}

body {
    margin: 0;
    line-height: inherit
}

hr {
    height: 0;
    color: inherit;
    border-top-width: 1px
}

abbr:where([title]) {
    text-decoration: underline dotted
}

h1,
h2,
h3,
h4,
h5,
h6 {
    font-size: inherit;
    font-weight: inherit
}

a {
    color: inherit;
    text-decoration: inherit
}

b,
strong {
    font-weight: bolder
}

code,
kbd,
pre,
samp {
    font-family: ui-monospace, SFMono-Regular, Menlo, Monaco, Consolas, Liberation Mono, Courier New, monospace;
    font-feature-settings: normal;
    font-variation-settings: normal;
    font-size: 1em
}

small {
    font-size: 80%
}

sub,
sup {
    font-size: 75%;
    line-height: 0;
    position: relative;
    vertical-align: baseline
}

sub {
    bottom: -.25em
}

sup {
    top: -.5em
}

table {
    text-indent: 0;
    border-color: inherit;
    border-collapse: collapse
}

button,
input,
optgroup,
select,
textarea {
    font-family: inherit;
    font-feature-settings: inherit;
    font-variation-settings: inherit;
    font-size: 100%;
    font-weight: inherit;
    line-height: inherit;
    letter-spacing: inherit;
    color: inherit;
    margin: 0;
    padding: 0
}

button,
select {
    text-transform: none
}

button,
input:where([type=button]),
input:where([type=reset]),
input:where([type=submit]) {
    -webkit-appearance: button;
    background-color: transparent;
    background-image: none
}

:-moz-focusring {
    outline: auto
}

:-moz-ui-invalid {
    box-shadow: none
}

progress {
    vertical-align: baseline
}

::-webkit-inner-spin-button,
::-webkit-outer-spin-button {
    height: auto
}

[type=search] {
    -webkit-appearance: textfield;
    outline-offset: -2px
}

::-webkit-search-decoration {
    -webkit-appearance: none
}

::-webkit-file-upload-button {
    -webkit-appearance: button;
    font: inherit
}

summary {
    display: list-item
}

blockquote,
dd,
dl,
figure,
h1,
h2,
h3,
h4,
h5,
h6,
hr,
p,
pre {
    margin: 0
}

fieldset {
    margin: 0
}

fieldset,
legend {
    padding: 0
}

menu,
ol,
ul {
    list-style: none;
    margin: 0;
    padding: 0
}

dialog {
    padding: 0
}

textarea {
    resize: vertical
}

input::placeholder,
textarea::placeholder {
    opacity: 1;
    color: #9ca3af
}

[role=button],
button {
    cursor: pointer
}

:disabled {
    cursor: default
}

audio,
canvas,
embed,
iframe,
img,
object,
svg,
video {
    display: block;
    vertical-align: middle
}

img,
video {
    max-width: 100%;
    height: auto
}

[hidden] {
    display: none
}

*,
:after,
:before {
    --tw-border-spacing-x: 0;
    --tw-border-spacing-y: 0;
    --tw-translate-x: 0;
    --tw-translate-y: 0;
    --tw-rotate: 0;
    --tw-skew-x: 0;
    --tw-skew-y: 0;
    --tw-scale-x: 1;
    --tw-scale-y: 1;
    --tw-pan-x: ;
    --tw-pan-y: ;
    --tw-pinch-zoom: ;
    --tw-scroll-snap-strictness: proximity;
    --tw-gradient-from-position: ;
    --tw-gradient-via-position: ;
    --tw-gradient-to-position: ;
    --tw-ordinal: ;
    --tw-slashed-zero: ;
    --tw-numeric-figure: ;
    --tw-numeric-spacing: ;
    --tw-numeric-fraction: ;
    --tw-ring-inset: ;
    --tw-ring-offset-width: 0px;
    --tw-ring-offset-color: #fff;
    --tw-ring-color: rgba(59, 130, 246, .5);
    --tw-ring-offset-shadow: 0 0 #0000;
    --tw-ring-shadow: 0 0 #0000;
    --tw-shadow: 0 0 #0000;
    --tw-shadow-colored: 0 0 #0000;
    --tw-blur: ;
    --tw-brightness: ;
    --tw-contrast: ;
    --tw-grayscale: ;
    --tw-hue-rotate: ;
    --tw-invert: ;
    --tw-saturate: ;
    --tw-sepia: ;
    --tw-drop-shadow: ;
    --tw-backdrop-blur: ;
    --tw-backdrop-brightness: ;
    --tw-backdrop-contrast: ;
    --tw-backdrop-grayscale: ;
    --tw-backdrop-hue-rotate: ;
    --tw-backdrop-invert: ;
    --tw-backdrop-opacity: ;
    --tw-backdrop-saturate: ;
    --tw-backdrop-sepia: ;
    --tw-contain-size: ;
    --tw-contain-layout: ;
    --tw-contain-paint: ;
    --tw-contain-style:
}

::backdrop {
    --tw-border-spacing-x: 0;
    --tw-border-spacing-y: 0;
    --tw-translate-x: 0;
    --tw-translate-y: 0;
    --tw-rotate: 0;
    --tw-skew-x: 0;
    --tw-skew-y: 0;
    --tw-scale-x: 1;
    --tw-scale-y: 1;
    --tw-pan-x: ;
    --tw-pan-y: ;
    --tw-pinch-zoom: ;
    --tw-scroll-snap-strictness: proximity;
    --tw-gradient-from-position: ;
    --tw-gradient-via-position: ;
    --tw-gradient-to-position: ;
    --tw-ordinal: ;
    --tw-slashed-zero: ;
    --tw-numeric-figure: ;
    --tw-numeric-spacing: ;
    --tw-numeric-fraction: ;
    --tw-ring-inset: ;
    --tw-ring-offset-width: 0px;
    --tw-ring-offset-color: #fff;
    --tw-ring-color: rgba(59, 130, 246, .5);
    --tw-ring-offset-shadow: 0 0 #0000;
    --tw-ring-shadow: 0 0 #0000;
    --tw-shadow: 0 0 #0000;
    --tw-shadow-colored: 0 0 #0000;
    --tw-blur: ;
    --tw-brightness: ;
    --tw-contrast: ;
    --tw-grayscale: ;
    --tw-hue-rotate: ;
    --tw-invert: ;
    --tw-saturate: ;
    --tw-sepia: ;
    --tw-drop-shadow: ;
    --tw-backdrop-blur: ;
    --tw-backdrop-brightness: ;
    --tw-backdrop-contrast: ;
    --tw-backdrop-grayscale: ;
    --tw-backdrop-hue-rotate: ;
    --tw-backdrop-invert: ;
    --tw-backdrop-opacity: ;
    --tw-backdrop-saturate: ;
    --tw-backdrop-sepia: ;
    --tw-contain-size: ;
    --tw-contain-layout: ;
    --tw-contain-paint: ;
    --tw-contain-style:
}

.container {
    width: 100%
}

@media (min-width:640px) {
    .container {
        max-width: 640px
    }
}

@media (min-width:768px) {
    .container {
        max-width: 768px
    }
}

@media (min-width:1024px) {
    .container {
        max-width: 1024px
    }
}

@media (min-width:1280px) {
    .container {
        max-width: 1280px
    }
}

@media (min-width:1536px) {
    .container {
        max-width: 1536px
    }
}

.visible {
    visibility: visible
}

.fixed {
    position: fixed
}

.absolute {
    position: absolute
}

.relative {
    position: relative
}

.m-auto {
    margin: auto
}

.block {
    display: block
}

.inline-block {
    display: inline-block
}

.flex {
    display: flex
}

.table {
    display: table
}

.grid {
    display: grid
}

.hidden {
    display: none
}

.transform {
    transform: translate(var(--tw-translate-x), var(--tw-translate-y)) rotate(var(--tw-rotate)) skewX(var(--tw-skew-x)) skewY(var(--tw-skew-y)) scaleX(var(--tw-scale-x)) scaleY(var(--tw-scale-y))
}

.resize {
    resize: both
}

.border {
    border-width: 1px
}

.italic {
    font-style: italic
}

.underline {
    text-decoration-line: underline
}

.line-through {
    text-decoration-line: line-through
}

.outline {
    outline-style: solid
}

.blur {
    --tw-blur: blur(8px)
}

.blur,
.filter {
    filter: var(--tw-blur) var(--tw-brightness) var(--tw-contrast) var(--tw-grayscale) var(--tw-hue-rotate) var(--tw-invert) var(--tw-saturate) var(--tw-sepia) var(--tw-drop-shadow)
}

.anticon {
    &.anticon-delete {
        color: #aea59b !important
    }
}

.white {
    &.anticon {
        &.anticon-delete {
            color: #fff !important
        }
    }

    .ant-select-item {
        color: #fff !important
    }
}

.brownBackground {
    background-color: #372e30 !important;
    border: none !important;
    color: #fff !important;

    .ant-select-selector {
        background-color: #372e30 !important;
        border: none !important;
        color: #fff !important
    }

    .ant-select-selection-item {
        color: #fff !important;
        padding: 0 !important
    }

    .ant-select-arrow {
        display: none !important
    }

    &.ant-btn {
        background-color: #372e30 !important;
        box-shadow: none !important
    }

    &.ant-btn,
    &.ant-btn:hover {
        border: none !important;
        color: #fff !important
    }

    &.ant-btn:hover {
        background-color: #4a3f41 !important;
        box-shadow: 2px 4px 4px rgba(0, 0, 0, .25) !important
    }

    input {
        color: #fff !important
    }
}

.noHighlight {
    .ant-select-item-option-selected {
        background-color: #372e30 !important
    }
}

.noPadding {

    .ant-modal-content,
    .ant-select-selector {
        padding: 0 !important
    }
}

.hideDisabled {
    .ant-picker-time-panel-cell-disabled {
        display: none !important
    }
}

.transparentBg {
    background-color: transparent !important
}

.solidBtn {
    background-color: darkred !important;
    color: #fff !important;
    font-weight: 600 !important;
    outline: none !important;
    border-color: darkred !important;
    height: fit-content !important;

    &.grey {
        background-color: #bdbdbd;
        border-color: #bdbdbd;
        color: #000
    }

    &.green {
        background-color: #267f80;
        border-color: #267f80;
        color: #fff
    }

    &.blue {
        background-color: #5067df !important;
        border-color: #5067df !important;
        color: #fff !important
    }
}

.solidBtn:disabled {
    background-color: #e1e1e1 !important;
    border-color: #e1e1e1 !important;
    color: rgba(0, 0, 0, .25) !important
}

.solidBtn:not(:disabled):hover {
    background-color: #b62b2b !important;
    border-color: #b62b2b !important;
    color: #fff !important
}

.solidBtn.grey:not(:disabled):hover {
    background-color: #a8a8a8 !important;
    border-color: #a8a8a8 !important;
    color: #000 !important
}

.solidBtn.green:not(:disabled):hover {
    background-color: #2d9fa1 !important;
    border-color: #2d9fa1 !important;
    color: #fff !important
}

.solidBtn.blue:not(:disabled):hover {
    background-color: #647bf3 !important;
    border-color: #647bf3 !important;
    color: #fff !important
}

.borderBtn {
    border: .15rem solid darkred !important;
    background-color: transparent !important;
    color: darkred !important;
    font-weight: 600 !important;
    height: fit-content !important;

    &.blue {
        border-color: #5067df !important;
        color: #5067df !important
    }

    &.grey {
        border-color: #bdbdbd !important;
        color: #bdbdbd !important
    }

    &.darkgrey {
        border-color: #767676 !important;
        color: #767676 !important
    }
}

.borderBtn:disabled {
    background-color: #e1e1e1 !important;
    border-color: #e1e1e1 !important;
    color: rgba(0, 0, 0, .25) !important
}

.borderBtn:not(:disabled):hover {
    border-color: #b62b2b !important;
    color: #b62b2b !important
}

.borderBtn.blue:not(:disabled):hover {
    border-color: #647bf3 !important;
    color: #647bf3 !important;
    background-color: #fff !important
}

.borderBtn.grey:not(:disabled):hover {
    border-color: #cfcfcf !important;
    color: #cfcfcf !important;
    background-color: #fff !important
}

.borderBtn.darkgrey:not(:disabled):hover {
    border-color: #999 !important;
    color: #999 !important;
    background-color: #fff !important
}

.overflow-visible {
    .slick-list {
        overflow: visible !important
    }
}

.bookingDatePicker {
    .ant-picker-input {
        input {
            font-size: 16px !important;
            font-weight: 600 !important
        }
    }
}

.alignLeft {

    .ant-select-selection-item,
    .ant-select-selection-search {
        align-items: flex-start !important;
        display: flex !important
    }
}
    `;
}

export function generateStyle02() {
    return `
    /*
 *	generated by WOW Slider 8.7
 *	template Elegant
 */
@import url(https://fonts.googleapis.com/css?family=Source+Sans+Pro&subset=latin,latin-ext);
.mbr-wowslider-container--elegant .mbr-wowslider { 
	display: block;
	zoom: 1; 
	position: relative;
	width: 100%;
	max-width: 100%;
	max-height:none;
	margin:0px auto 0px;
	z-index:90;
	text-align:left; /* reset align=center */
	font-size: 10px;
	text-shadow: none; /* fix some user styles */

	/* reset box-sizing (to boostrap friendly) */
	-webkit-box-sizing: content-box;
	-moz-box-sizing: content-box;
	box-sizing: content-box; 
}
* html .mbr-wowslider-container--elegant .mbr-wowslider{ width:640px }
.mbr-wowslider-container--elegant .mbr-wowslider .ws_images ul{
	position:relative;
	width: 10000%; 
	height:100%;
	left:0;
	list-style:none;
	margin:0;
	padding:0;
	border-spacing:0;
	overflow: visible;
	/*table-layout:fixed;*/
  max-height: 375px;
}
.mbr-wowslider-container--elegant .mbr-wowslider .ws_images ul li{
	position: relative;
	width:1%;
	height:100%;
	line-height:0; /*opera*/
	overflow: hidden;
	float:left;
	/*font-size:0;*/
	padding:0 0 0 0 !important;
	margin:0 0 0 0 !important;
}

.mbr-wowslider-container--elegant .mbr-wowslider .ws_images{
	position: relative;
	left:0;
	top:0;
	height:100%;
	max-height:none;
	max-width: 100%;
	vertical-align: top;
	border:none;
	overflow: hidden;
}
.mbr-wowslider-container--elegant .mbr-wowslider .ws_images ul a{
	width:100%;
	height:100%;
	max-height:none;
	display:block;
	color:transparent;
}
.mbr-wowslider-container--elegant .mbr-wowslider img{
	max-width: none !important;
}
.mbr-wowslider-container--elegant .mbr-wowslider .ws_images .ws_list img,
.mbr-wowslider-container--elegant .mbr-wowslider .ws_images > div > img{
	width:100%;
	border:none 0;
	max-width: none;
	padding:0;
	margin:0;
}
.mbr-wowslider-container--elegant .mbr-wowslider .ws_images > div > img {
	max-height:none;
}

.mbr-wowslider-container--elegant .mbr-wowslider .ws_images iframe {
	position: absolute;
	z-index: -1;
}

.mbr-wowslider-container--elegant .mbr-wowslider .ws-title > div {
	display: inline-block !important;
}

.mbr-wowslider-container--elegant .mbr-wowslider a{ 
	text-decoration: none; 
	outline: none; 
	border: none; 
}

.mbr-wowslider-container--elegant .mbr-wowslider  .ws_bullets { 
	float: left;
	position:absolute;
	z-index:70;
}
.mbr-wowslider-container--elegant .mbr-wowslider  .ws_bullets div{
	position:relative;
	float:left;
	font-size: 0px;
}
/* compatibility with Joomla styles */
.mbr-wowslider-container--elegant .mbr-wowslider  .ws_bullets a {
	line-height: 0;
}

.mbr-wowslider-container--elegant .mbr-wowslider  .ws_script{
	display:none;
}
.mbr-wowslider-container--elegant .mbr-wowslider sound, 
.mbr-wowslider-container--elegant .mbr-wowslider object{
	position:absolute;
}

/* prevent some of users reset styles */
.mbr-wowslider-container--elegant .mbr-wowslider .ws_effect {
	position: static;
	width: 100%;
	height: 100%;
}

.mbr-wowslider-container--elegant .mbr-wowslider .ws_photoItem {
	border: 2em solid #fff;
	margin-left: -2em;
	margin-top: -2em;
}
.mbr-wowslider-container--elegant .mbr-wowslider .ws_cube_side {
	background: #A6A5A9;
}


.mbr-wowslider-container--elegant .mbr-wowslider.ws_gestures {
	cursor: -webkit-grab;
	cursor: -moz-grab;
	cursor: url("data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAACAAAAAgCAQAAADZc7J/AAAABGdBTUEAALGPC/xhBQAAACBjSFJNAAB6JgAAgIQAAPoAAACA6AAAdTAAAOpgAAA6mAAAF3CculE8AAAAAmJLR0QA/4ePzL8AAABwSURBVEjH7ZJBEsAgCAMT/v/n9NCOSqe2oD2yNx1JggB4BCEFWyFASP2KMQE7ywWhe/tTRGCGogLk02tFctiW/SUgaMyQG4PdPzDn31rQbMb8FiAXgvsEJNax1yVlVGAjA93apP3HFhZTGIqiKH7iADB6HxPlHdNVAAAAJXRFWHRkYXRlOmNyZWF0ZQAyMDE0LTA3LTA3VDEzOjQ5OjEwKzAyOjAwm7WiFAAAACV0RVh0ZGF0ZTptb2RpZnkAMjAxNC0wNy0wN1QxMzo0OToxMCswMjowMOroGqgAAAAASUVORK5CYII="), move;
}
.mbr-wowslider-container--elegant .mbr-wowslider.ws_gestures.ws_grabbing {
	cursor: -webkit-grabbing;
	cursor: -moz-grabbing;
	cursor: url("data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAACAAAAAgCAQAAADZc7J/AAAABGdBTUEAALGPC/xhBQAAACBjSFJNAAB6JgAAgIQAAPoAAACA6AAAdTAAAOpgAAA6mAAAF3CculE8AAAAAmJLR0QA/4ePzL8AAABaSURBVEjH7ZMxCkAhDEOT8u9/5TpJ+xWkFse8IYutJgEB8RCHL1qCc90BEFnT6QH7mwgFHBUf8wJyS1TDLuc3vmighx37LZdIth3E5hKj9n6O0HRh+oJCiFcMxRUUDxR1CTMAAAAldEVYdGRhdGU6Y3JlYXRlADIwMTQtMDctMDdUMTM6NDk6MzgrMDI6MDDqf+sOAAAAJXRFWHRkYXRlOm1vZGlmeQAyMDE0LTA3LTA3VDEzOjQ5OjM4KzAyOjAwmyJTsgAAAABJRU5ErkJggg=="), move;
}

/* hide controls when video start play */
.mbr-wowslider-container--elegant .mbr-wowslider.ws_video_playing .ws_bullets,
.mbr-wowslider-container--elegant .mbr-wowslider.ws_video_playing .ws_fullscreen,
.mbr-wowslider-container--elegant .mbr-wowslider.ws_video_playing .ws_next,
.mbr-wowslider-container--elegant .mbr-wowslider.ws_video_playing .ws_prev {
	display: none;
}


/* youtube/vimeo buttons */
.mbr-wowslider-container--elegant .mbr-wowslider .ws_video_btn {
	position: absolute;
	display: none;
	cursor: pointer;
	top: 0;
	left: 0;
	width: 100%;
	height: 100%;
	z-index: 55;
}
.mbr-wowslider-container--elegant .mbr-wowslider .ws_video_btn.ws_youtube,
.mbr-wowslider-container--elegant .mbr-wowslider .ws_video_btn.ws_vimeo {
	display: block;
}
.mbr-wowslider-container--elegant .mbr-wowslider .ws_video_btn div {
	position: absolute;
	background-image: url(../images/playvideo.png);
	background-size: 200%;
	top: 50%;
	left: 50%;
	width: 7em;
	height: 5em;
	margin-left: -3.5em;
	margin-top: -2.5em;
}
.mbr-wowslider-container--elegant .mbr-wowslider .ws_video_btn.ws_youtube div {
	background-position: 0 0;
}
.mbr-wowslider-container--elegant .mbr-wowslider .ws_video_btn.ws_youtube:hover div {
	background-position: 100% 0;
}
.mbr-wowslider-container--elegant .mbr-wowslider .ws_video_btn.ws_vimeo div {
	background-position: 0 100%;
}
.mbr-wowslider-container--elegant .mbr-wowslider .ws_video_btn.ws_vimeo:hover div {
	background-position: 100% 100%;
}

.mbr-wowslider-container--elegant .mbr-wowslider .ws_playpause.ws_hide {
	display: none !important;
}
.mbr-wowslider-container--elegant .mbr-wowslider  .ws_bullets { 
	padding: 10px; 
}
.mbr-wowslider-container--elegant .mbr-wowslider .ws_bullets a { 
	margin-left:6px;
	width:13px;
	height:13px;
	background: url(../images/bullet.png) left top;
	float: left; 
	text-indent: -4000px; 
	position:relative;
	color:transparent;
}
.mbr-wowslider-container--elegant .mbr-wowslider .ws_bullets a.ws_selbull, .mbr-wowslider-container--elegant .mbr-wowslider .ws_bullets a:hover{
	background-position: 0 100%;
}
.mbr-wowslider-container--elegant .mbr-wowslider a.ws_next, .mbr-wowslider-container--elegant .mbr-wowslider a.ws_prev {
	position:absolute;
	top:50%;
	margin-top:-2.1em;
	z-index:60;
	height: 3.2em;
	width: 3.2em;
	background-image: url(../images/arrows.png);
	background-size: 200%;
}
.mbr-wowslider-container--elegant .mbr-wowslider a.ws_next{
	background-position: 100% 0;
	right:0.5em;
}
.mbr-wowslider-container--elegant .mbr-wowslider a.ws_prev {
	left:0.5px;
	background-position: 0 0; 
}
.mbr-wowslider-container--elegant .mbr-wowslider a.ws_next:hover{
	background-position: 100% 100%;
}
.mbr-wowslider-container--elegant .mbr-wowslider a.ws_prev:hover {
	background-position: 0 100%; 
}

/*playpause*/
.mbr-wowslider-container--elegant .mbr-wowslider .ws_playpause {
    width: 3.2em;
    height: 3.2em;
    position: absolute;
    top: 50%;
    left: 50%;
    margin-left: -1.6em;
    margin-top: -1.6em;
    z-index: 59;
	background-size: 100%;
}

.mbr-wowslider-container--elegant .mbr-wowslider .ws_pause {
    background-image: url(../images/pause.png);
}

.mbr-wowslider-container--elegant .mbr-wowslider .ws_play {
    background-image: url(../images/play.png);
}

.mbr-wowslider-container--elegant .mbr-wowslider .ws_pause:hover, .mbr-wowslider-container--elegant .mbr-wowslider .ws_play:hover {
    background-position: 100% 100% !important;
}/* bottom center */
.mbr-wowslider-container--elegant .mbr-wowslider  .ws_bullets {
	bottom:-5px;
	left:50%;
}
.mbr-wowslider-container--elegant .mbr-wowslider  .ws_bullets div{
	left:-50%;
}
/* separate */
.mbr-wowslider-container--elegant .mbr-wowslider .ws-title{
	position: absolute;
	display:block; 
    font: 2.5em 'Source Sans Pro', Arial, sans-serif;
	bottom:1.1em;
	left:0;
	margin-right:0.1em;
	z-index: 50;
	color: #fff;	
	line-height: 1em;

}
.mbr-wowslider-container--elegant .mbr-wowslider .ws-title div,.mbr-wowslider-container--elegant .mbr-wowslider .ws-title span{ 
	display:inline-block; 
	margin-top:0.5em;
	background:#3399FF;
	font-weight: normal;	
	border-radius:0;
	opacity:0.8;
	filter:progid:DXImageTransform.Microsoft.Alpha(opacity=90);	

}
.mbr-wowslider-container--elegant .mbr-wowslider .ws-title div{ 
	display:block;
	margin-top:0.5em; 
	font-size: 0.72em;
	background:#fff;	
	color: #3399FF;
	padding:0.5em;
	line-height: 1.28em;
}
.mbr-wowslider-container--elegant .mbr-wowslider .ws-title span{
	padding:0.4em;
}.mbr-wowslider-container--elegant .mbr-wowslider .ws_images > ul{
	animation: wsBasic 16s infinite;
	-moz-animation: wsBasic 16s infinite;
	-webkit-animation: wsBasic 16s infinite;
}
@keyframes wsBasic{0%{left:-0%} 12.5%{left:-0%} 25%{left:-100%} 37.5%{left:-100%} 50%{left:-200%} 62.5%{left:-200%} 75%{left:-300%} 87.5%{left:-300%} }
@-moz-keyframes wsBasic{0%{left:-0%} 12.5%{left:-0%} 25%{left:-100%} 37.5%{left:-100%} 50%{left:-200%} 62.5%{left:-200%} 75%{left:-300%} 87.5%{left:-300%} }
@-webkit-keyframes wsBasic{0%{left:-0%} 12.5%{left:-0%} 25%{left:-100%} 37.5%{left:-100%} 50%{left:-200%} 62.5%{left:-200%} 75%{left:-300%} 87.5%{left:-300%} }

.mbr-wowslider-container--elegant .mbr-wowslider .ws_bullets  a img{
	text-indent:0;
	display:block;
	bottom:20px;
	left:-43px;
	visibility:hidden;
	position:absolute;
    border: 1px solid #FFFFFF;
	max-width:none;
}
.mbr-wowslider-container--elegant .mbr-wowslider .ws_bullets a:hover img{
	visibility:visible;
}

.mbr-wowslider-container--elegant .mbr-wowslider .ws_bulframe div div{
	height:48px;
	overflow:visible;
	position:relative;
}
.mbr-wowslider-container--elegant .mbr-wowslider .ws_bulframe div {
	left:0;
	overflow:hidden;
	position:relative;
	width:85px;
	background-color:#FFFFFF;
}
.mbr-wowslider-container--elegant .mbr-wowslider  .ws_bullets .ws_bulframe{
	display:none;
	bottom:20px;
	overflow:visible;
	position:absolute;
	cursor:pointer;
    border: 1px solid #FFFFFF;
}
.mbr-wowslider-container--elegant .mbr-wowslider .ws_bulframe span{
	display:block;
	position:absolute;
	bottom:-8px;
	margin-left:-1px;
	left:43px;
	background:url(../images/triangle.png);
	width:13px;
	height:7px;
}.mbr-wowslider-container--elegant .mbr-wowslider .ws_bulframe div div{
	height: auto;
}

@media all and (max-width:760px) {
	.mbr-wowslider-container--elegant .mbr-wowslider .ws_fullscreen {
		display: block;
	}
}
@media all and (max-width:400px){
	.mbr-wowslider-container--elegant .mbr-wowslider .ws_controls,
	.mbr-wowslider-container--elegant .mbr-wowslider .ws_bullets,
	.mbr-wowslider-container--elegant .mbr-wowslider .ws_thumbs{
		display: none
	}
}
    `;
}

export function generateStyle05() {
    return `
   /*!
 * Mobirise v4 theme (https://mobirise.com/)
 * Copyright 2017 Mobirise
 */
section {
  background-color: #eeeeee;
}

section,
.container,
.container-fluid {
  position: relative;
  word-wrap: break-word;
}

.form-control:focus {
  box-shadow: none;
}

:focus {
  outline: none;
}

a.mbr-iconfont:hover {
  text-decoration: none;
}

.article .lead p,
.article .lead ul,
.article .lead ol,
.article .lead pre,
.article .lead blockquote {
  margin-bottom: 0;
}

a {
  font-style: normal;
  font-weight: 400;
  cursor: pointer;
}

a, a:hover {
  text-decoration: none;
}

figure {
  margin-bottom: 0;
}

body {
  color: #232323;
}

h1,
h2,
h3,
h4,
h5,
h6,
.h1,
.h2,
.h3,
.h4,
.h5,
.h6,
.display-1,
.display-2,
.display-3,
.display-4 {
  line-height: 1;
  word-break: break-word;
  word-wrap: break-word;
}

b,
strong {
  font-weight: bold;
}

blockquote {
  padding: 10px 0 10px 20px;
  position: relative;
  border-left: 2px solid;
  border-color: #ff3366;
}

input:-webkit-autofill, input:-webkit-autofill:hover, input:-webkit-autofill:focus, input:-webkit-autofill:active {
  transition-delay: 9999s;
  transition-property: background-color, color;
}

textarea[type="hidden"] {
  display: none;
}

body {
  position: relative;
}

section {
  background-position: 50% 50%;
  background-repeat: no-repeat;
  background-size: cover;
}

section .mbr-background-video,
section .mbr-background-video-preview {
  position: absolute;
  bottom: 0;
  left: 0;
  right: 0;
  top: 0;
}

.hidden {
  visibility: hidden;
}

.mbr-z-index20 {
  z-index: 20;
}

/*! Base colors */
.mbr-white {
  color: #ffffff;
}

.mbr-black {
  color: #000000;
}

.mbr-bg-white {
  background-color: #ffffff;
}

.mbr-bg-black {
  background-color: #000000;
}

/*! Text-aligns */
.align-left {
  text-align: left;
}

.align-center {
  text-align: center;
}

.align-right {
  text-align: right;
}

@media (max-width: 767px) {
  .align-left,
  .align-center,
  .align-right,
  .mbr-section-btn,
  .mbr-section-title {
    text-align: center;
  }
}

/*! Font-weight  */
.mbr-light {
  font-weight: 300;
}

.mbr-regular {
  font-weight: 400;
}

.mbr-semibold {
  font-weight: 500;
}

.mbr-bold {
  font-weight: 700;
}

/*! Media  */
.media-size-item {
  -moz-flex: 1 1 auto;
  -o-flex: 1 1 auto;
  flex: 1 1 auto;
}

.media-content {
  flex-basis: 100%;
}

.media-container-row {
  display: flex;
  flex-direction: row;
  flex-wrap: wrap;
  justify-content: center;
  align-content: center;
  align-items: start;
}

.media-container-row .media-size-item {
  width: 400px;
}

.media-container-column {
  display: flex;
  flex-direction: column;
  flex-wrap: wrap;
  justify-content: center;
  align-content: center;
  align-items: stretch;
}

.media-container-column > * {
  width: 100%;
}

@media (min-width: 992px) {
  .media-container-row {
    flex-wrap: nowrap;
  }
}

figure {
  overflow: hidden;
}

figure[mbr-media-size] {
  transition: width 0.1s;
}

.mbr-figure img,
.mbr-figure iframe {
  display: block;
  width: 100%;
}

.card {
  background-color: transparent;
  border: none;
}

.card-img {
  text-align: center;
  flex-shrink: 0;
  -webkit-flex-shrink: 0;
}

.media {
  max-width: 100%;
  margin: 0 auto;
}

.mbr-figure {
  -ms-grid-row-align: center;
  align-self: center;
}

.media-container > div {
  max-width: 100%;
}

.mbr-figure img,
.card-img img {
  width: 100%;
}

@media (max-width: 991px) {
  .media-size-item {
    width: auto !important;
  }
  .media {
    width: auto;
  }
  .mbr-figure {
    width: 100% !important;
  }
}

/*! Buttons */
.mbr-section-btn {
  margin-left: -.25rem;
  margin-right: -.25rem;
  font-size: 0;
}

nav .mbr-section-btn {
  margin-left: 0rem;
  margin-right: 0rem;
}

/*! Btn icon margin */
.btn .mbr-iconfont,
.btn.btn-sm .mbr-iconfont {
  cursor: pointer;
  margin-right: 0.5rem;
}

.btn.btn-md .mbr-iconfont,
.btn.btn-md .mbr-iconfont {
  margin-right: 0.8rem;
}

.mbr-regular {
  font-weight: 400;
}

.mbr-semibold {
  font-weight: 500;
}

.mbr-bold {
  font-weight: 700;
}

[type="submit"] {
  -webkit-appearance: none;
}

/*! Full-screen */
.mbr-fullscreen .mbr-overlay {
  min-height: 100vh;
}

.mbr-fullscreen {
  display: flex;
  display: -moz-flex;
  display: -ms-flex;
  display: -o-flex;
  align-items: center;
  -webkit-align-items: center;
  min-height: 100vh;
  padding-top: 3rem;
  padding-bottom: 3rem;
}

/*! Map */
.map {
  height: 25rem;
  position: relative;
}

.map iframe {
  width: 100%;
  height: 100%;
}

/* Form */
.form-asterisk {
  font-family: initial;
  position: absolute;
  top: -2px;
  font-weight: normal;
}

/*! Scroll to top arrow */
.mbr-arrow-up {
  bottom: 25px;
  right: 90px;
  position: fixed;
  text-align: right;
  z-index: 5000;
  color: #ffffff;
  font-size: 32px;
  transform: rotate(180deg);
  -webkit-transform: rotate(180deg);
}

.mbr-arrow-up a {
  background: rgba(0, 0, 0, 0.2);
  border-radius: 3px;
  color: #fff;
  display: inline-block;
  height: 60px;
  width: 60px;
  outline-style: none !important;
  position: relative;
  text-decoration: none;
  transition: all .3s ease-in-out;
  cursor: pointer;
  text-align: center;
}

.mbr-arrow-up a:hover {
  background-color: rgba(0, 0, 0, 0.4);
}

.mbr-arrow-up a i {
  line-height: 60px;
}

.mbr-arrow-up-icon {
  display: block;
  color: #fff;
}

.mbr-arrow-up-icon::before {
  content: "\\203a";
  display: inline-block;
  font-family: serif;
  font-size: 32px;
  line-height: 1;
  font-style: normal;
  position: relative;
  top: 6px;
  left: -4px;
  -webkit-transform: rotate(-90deg);
  transform: rotate(-90deg);
}

/*! Arrow Down */
.mbr-arrow {
  position: absolute;
  bottom: 45px;
  left: 50%;
  width: 60px;
  height: 60px;
  cursor: pointer;
  background-color: rgba(80, 80, 80, 0.5);
  border-radius: 50%;
  -webkit-transform: translateX(-50%);
  transform: translateX(-50%);
}

.mbr-arrow > a {
  display: inline-block;
  text-decoration: none;
  outline-style: none;
  -webkit-animation: arrowdown 1.7s ease-in-out infinite;
  animation: arrowdown 1.7s ease-in-out infinite;
}

.mbr-arrow > a > i {
  position: absolute;
  top: -2px;
  left: 15px;
  font-size: 2rem;
}

@keyframes arrowdown {
  0% {
    transform: translateY(0px);
    -webkit-transform: translateY(0px);
  }
  50% {
    transform: translateY(-5px);
    -webkit-transform: translateY(-5px);
  }
  100% {
    transform: translateY(0px);
    -webkit-transform: translateY(0px);
  }
}

@-webkit-keyframes arrowdown {
  0% {
    transform: translateY(0px);
    -webkit-transform: translateY(0px);
  }
  50% {
    transform: translateY(-5px);
    -webkit-transform: translateY(-5px);
  }
  100% {
    transform: translateY(0px);
    -webkit-transform: translateY(0px);
  }
}

@media (max-width: 500px) {
  .mbr-arrow-up {
    left: 50%;
    right: auto;
    transform: translateX(-50%) rotate(180deg);
    -webkit-transform: translateX(-50%) rotate(180deg);
  }
}

/*Gradients animation

use with:

background: linear-gradient(0deg, #2e3192, #1bffff);
background-size: 200% 200%;
animation: gradient-animation 4s infinite alternate;
-webkit-animation: gradient-animation 4s infinite alternate;
    */
@keyframes gradient-animation {
  from {
    background-position: 0% 100%;
    -webkit-animation-timing-function: ease-in-out;
    animation-timing-function: ease-in-out;
  }
  to {
    background-position: 100% 0%;
    -webkit-animation-timing-function: ease-in-out;
    animation-timing-function: ease-in-out;
  }
}

@-webkit-keyframes gradient-animation {
  from {
    background-position: 0% 100%;
    -webkit-animation-timing-function: ease-in-out;
    animation-timing-function: ease-in-out;
  }
  to {
    background-position: 100% 0%;
    -webkit-animation-timing-function: ease-in-out;
    animation-timing-function: ease-in-out;
  }
}

.bg-gradient {
  background-size: 200% 200%;
  animation: gradient-animation 5s infinite alternate;
  -webkit-animation: gradient-animation 5s infinite alternate;
}

.menu .navbar-brand {
  display: -webkit-flex;
}

.menu .navbar-brand span {
  display: flex;
  display: -webkit-flex;
}

.menu .navbar-brand .navbar-caption-wrap {
  display: -webkit-flex;
}

.menu .navbar-brand .navbar-logo img {
  display: -webkit-flex;
}

@media (max-width: 991px) {
  .menu .navbar-collapse {
    max-height: 94vh;
  }
  .menu .navbar-collapse.show {
    overflow: auto;
  }
}

@media (max-width: 767px) {
  .menu .navbar-collapse {
    max-height: 60vh;
  }
}

@media (min-width: 768px) and (max-width: 991px) {
  .menu .navbar-toggleable-sm .navbar-nav {
    display: -ms-flexbox;
  }
}

@media (min-width: 992px) {
  .menu .navbar-nav.nav-dropdown {
    display: -webkit-flex;
  }
  .menu .navbar-toggleable-sm .navbar-collapse {
    display: -webkit-flex !important;
  }
  .menu .collapsed .navbar-collapse {
    max-height: 94vh;
  }
  .menu .collapsed .navbar-collapse.show {
    overflow: auto;
  }
}

.navbar {
  display: -webkit-flex;
  -webkit-flex-wrap: wrap;
  -webkit-align-items: center;
  -webkit-justify-content: space-between;
}

.navbar-collapse {
  -webkit-flex-basis: 100%;
  -webkit-flex-grow: 1;
  -webkit-align-items: center;
}

.nav-dropdown .link {
  padding: .667em 1.667em !important;
  margin: 0 !important;
}

.row {
  display: -webkit-flex;
  -webkit-flex-wrap: wrap;
}

.justify-content-center {
  -webkit-justify-content: center;
}

.card-wrapper {
  flex: 1;
  -webkit-flex: 1;
}

.form-group:focus {
  outline: none;
}

.jq-selectbox__select {
  padding: 1.07em .5em;
  position: absolute;
  top: 0;
  left: 0;
  display: flex;
  align-items: center;
  height: 100%;
  width: 100%;
}

.jq-selectbox__dropdown {
  position: absolute;
  top: 100%;
  left: 0 !important;
  width: 100% !important;
}

.jq-selectbox__trigger-arrow {
  -webkit-transform: translateY(-50%);
          transform: translateY(-50%);
}

.jq-selectbox li {
  padding: 6px 12px;
}

input[type="range"] {
  padding-left: 0 !important;
  padding-right: 0 !important;
}

.modal-dialog,
.modal-content {
  height: 100%;
}

.modal-dialog .carousel-inner {
  height: calc(100vh - 1.75rem);
}

@media (max-width: 575px) {
  .modal-dialog .carousel-inner {
    height: calc(100vh - 1rem);
  }
}

.carousel-item {
  text-align: center;
}

.carousel-item img {
  margin: auto;
}

body {
  font-style: normal;
  line-height: 1.5;
}

.mbr-section-title {
  font-style: normal;
  line-height: 1.2;
}

.mbr-section-subtitle {
  line-height: 1.3;
}

.mbr-text {
  font-style: normal;
  line-height: 1.6;
}

.btn {
  color: initial;
  border-radius: 0;
  font-weight: 600;
  border-width: 2px;
  font-style: normal;
  letter-spacing: 2px;
  margin: .4rem .8rem;
  white-space: normal;
  transition: all .3s ease-in-out;
  display: inline-flex;
  align-items: center;
  justify-content: center;
  word-break: break-word;
}

.btn-sm {
  font-weight: 600;
  letter-spacing: 2px;
  transition: all .3s ease-in-out;
}

.btn-md {
  font-weight: 600;
  letter-spacing: 2px;
  margin: .4rem .8rem !important;
  transition: all .3s ease-in-out;
}

.btn-lg {
  font-weight: 600;
  letter-spacing: 2px;
  margin: .4rem .8rem !important;
  transition: all .3s ease-in-out;
}

@media (max-width: 767px) {
  .btn {
    font-size: .75rem !important;
  }
  .btn .mbr-iconfont {
    font-size: 1rem !important;
  }
}

#scrollToTop a {
  opacity: .5;
}

#scrollToTop a:hover {
  opacity: .7;
}

#scrollToTop a i:before {
  content: '';
  position: absolute;
  height: 40%;
  top: 25%;
  width: 2px;
  left: calc(50% - 1px);
}

#scrollToTop a i:after {
  content: '';
  position: absolute;
  display: block;
  width: 40%;
  height: 40%;
  left: 30%;
  bottom: 30%;
  -webkit-transform: rotate(135deg);
  transform: rotate(135deg);
}

/* Others*/
.note-check a[data-value=Rubik] {
  font-style: normal;
}

.mbr-arrow {
  opacity: .5;
  transition: .3s;
}

.mbr-arrow:hover {
  opacity: .7;
}

@media (max-width: 767px) {
  .mbr-arrow {
    display: none;
  }
}

.form-control-label {
  position: relative;
  cursor: pointer;
  margin-bottom: .357em;
  padding: 0;
}

.alert {
  color: #ffffff;
  border-radius: 0;
  border: 0;
  font-size: .875rem;
  line-height: 1.5;
  margin-bottom: 1.875rem;
  padding: 1.25rem;
  position: relative;
}

.alert.alert-form::after {
  background-color: inherit;
  bottom: -7px;
  content: "";
  display: block;
  height: 14px;
  left: 50%;
  margin-left: -7px;
  position: absolute;
  -webkit-transform: rotate(45deg);
  transform: rotate(45deg);
  width: 14px;
}

.form-control {
  background-color: #ffffff;
  box-shadow: none;
  color: #565656;
  line-height: 1.43;
  min-height: 2.5em;
  padding: 1.07em .5em;
}

.form-control, .form-control:focus {
  border: 1px solid #e8e8e8;
}

.form-active .form-control:invalid {
  border-color: red;
}

.mbr-overlay {
  background-color: #000;
  bottom: 0;
  left: 0;
  opacity: .5;
  position: absolute;
  right: 0;
  top: 0;
  z-index: 0;
}

blockquote {
  font-style: italic;
  padding: 10px 0 10px 20px;
  font-size: 1.09rem;
  position: relative;
  border-width: 3px;
}

ul,
ol,
pre,
blockquote {
  margin-bottom: 2.3125rem;
}

pre {
  background: #f4f4f4;
  padding: 10px 24px;
  white-space: pre-wrap;
}

.inactive {
  -webkit-user-select: none;
  -moz-user-select: none;
  -ms-user-select: none;
  user-select: none;
  pointer-events: none;
  -webkit-user-drag: none;
  user-drag: none;
}

.mbr-section__comments .row {
  justify-content: center;
}

.carousel-item.active,
.carousel-item-next,
.carousel-item-prev {
  display: flex;
}

.note-air-layout .dropup .dropdown-menu,
.note-air-layout .navbar-fixed-bottom .dropdown .dropdown-menu {
  bottom: initial !important;
}

html,
body {
  height: auto;
  min-height: 100vh;
}

.dropup .dropdown-toggle::after {
  display: none;
}
.engine {
	position: absolute;
	text-indent: -2400px;
	text-align: center;
	padding: 0;
	top: 0;
	left: -2400px;
}
#wowslider-7 .mbr-wowslider.boxed {
            max-width: 500px !important;
}
.mbr-wowslider-container--elegant .mbr-wowslider .ws_images {
max-height: 375px !important;
}
`
}