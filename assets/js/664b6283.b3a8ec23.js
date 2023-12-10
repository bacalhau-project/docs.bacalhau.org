"use strict";(self.webpackChunkbacalhau_docs=self.webpackChunkbacalhau_docs||[]).push([[691],{4082:(e,n,t)=>{t.r(n),t.d(n,{assets:()=>c,contentTitle:()=>i,default:()=>h,frontMatter:()=>s,metadata:()=>a,toc:()=>l});var r=t(5893),o=t(1151);const s={sidebar_label:"Observability",sidebar_position:200},i="Observability",a={id:"running-node/observability",title:"Observability",description:"Bacalhau supports the three main 'pillars' of observability - logging, metrics, and tracing. Bacalhau uses the OpenTelemetry Go SDK for metrics and tracing, which can be configured using the standard environment variables. Exporting metrics and traces can be as simple as setting the OTELEXPORTEROTLPPROTOCOL and OTELEXPORTEROTLPENDPOINT environment variables. Custom code is used for logging as the OpenTelemetry Go SDK currently doesn't support logging.",source:"@site/docs/running-node/observability.md",sourceDirName:"running-node",slug:"/running-node/observability",permalink:"/running-node/observability",draft:!1,unlisted:!1,editUrl:"https://github.com/bacalhau-project/docs.bacalhau.org/blob/main/docs/running-node/observability.md",tags:[],version:"current",lastUpdatedAt:1702252086,formattedLastUpdatedAt:"Dec 10, 2023",sidebarPosition:200,frontMatter:{sidebar_label:"Observability",sidebar_position:200},sidebar:"documentationSidebar",previous:{title:"Windows Support",permalink:"/running-node/windows-support"},next:{title:"Configuration",permalink:"/running-node/configuration"}},c={},l=[{value:"Logging",id:"logging",level:2},{value:"Metrics",id:"metrics",level:2},{value:"Tracing",id:"tracing",level:2},{value:"Viewing",id:"viewing",level:2}];function d(e){const n={a:"a",code:"code",h1:"h1",h2:"h2",li:"li",p:"p",pre:"pre",ul:"ul",...(0,o.a)(),...e.components};return(0,r.jsxs)(r.Fragment,{children:[(0,r.jsx)(n.h1,{id:"observability",children:"Observability"}),"\n",(0,r.jsxs)(n.p,{children:["Bacalhau supports the three main 'pillars' of observability - logging, metrics, and tracing. Bacalhau uses the ",(0,r.jsx)(n.a,{href:"https://github.com/open-telemetry/opentelemetry-go",children:"OpenTelemetry Go SDK"})," for metrics and tracing, which can be configured using the ",(0,r.jsx)(n.a,{href:"https://github.com/open-telemetry/opentelemetry-specification/blob/main/specification/protocol/exporter.md",children:"standard environment variables"}),". Exporting metrics and traces can be as simple as setting the ",(0,r.jsx)(n.code,{children:"OTEL_EXPORTER_OTLP_PROTOCOL"})," and ",(0,r.jsx)(n.code,{children:"OTEL_EXPORTER_OTLP_ENDPOINT"})," environment variables. Custom code is used for logging as the ",(0,r.jsx)(n.a,{href:"https://github.com/open-telemetry/opentelemetry-go#project-status",children:"OpenTelemetry Go SDK currently doesn't support logging"}),"."]}),"\n",(0,r.jsx)(n.h2,{id:"logging",children:"Logging"}),"\n",(0,r.jsxs)(n.p,{children:["Logging in Bacalhau outputs in human-friendly format to stderr at ",(0,r.jsx)(n.code,{children:"INFO"})," level by default, but this can be changed by two environment variables:"]}),"\n",(0,r.jsxs)(n.ul,{children:["\n",(0,r.jsxs)(n.li,{children:[(0,r.jsx)(n.code,{children:"LOG_LEVEL"})," - Can be one of ",(0,r.jsx)(n.code,{children:"trace"}),", ",(0,r.jsx)(n.code,{children:"debug"}),", ",(0,r.jsx)(n.code,{children:"error"}),", ",(0,r.jsx)(n.code,{children:"warn"})," or ",(0,r.jsx)(n.code,{children:"fatal"})," to output more or fewer logging messages as required"]}),"\n",(0,r.jsxs)(n.li,{children:[(0,r.jsx)(n.code,{children:"LOG_TYPE"})," - Can be one of the following values:","\n",(0,r.jsxs)(n.ul,{children:["\n",(0,r.jsxs)(n.li,{children:[(0,r.jsx)(n.code,{children:"default"})," - output logs to stderr in a human-friendly format"]}),"\n",(0,r.jsxs)(n.li,{children:[(0,r.jsx)(n.code,{children:"json"})," - log messages outputted to stdout in JSON format"]}),"\n",(0,r.jsxs)(n.li,{children:[(0,r.jsx)(n.code,{children:"combined"})," - log JSON formatted messages to stdout and human-friendly format to stderr"]}),"\n"]}),"\n"]}),"\n"]}),"\n",(0,r.jsx)(n.p,{children:"Log statements should include the relevant trace, span and job ID so it can be tracked back to the work being performed."}),"\n",(0,r.jsx)(n.h2,{id:"metrics",children:"Metrics"}),"\n",(0,r.jsxs)(n.p,{children:["Bacalhau produces a number of different metrics including those around the libp2p resource manager (",(0,r.jsx)(n.code,{children:"rcmgr"}),"), performance\nof the requester HTTP API and the number of jobs accepted/completed/received."]}),"\n",(0,r.jsx)(n.h2,{id:"tracing",children:"Tracing"}),"\n",(0,r.jsxs)(n.p,{children:["Traces are produced for all major pieces of work when processing a job, although the naming of some spans is still being worked on. You can find relevant traces covering working on a job by searching for the ",(0,r.jsx)(n.code,{children:"jobid"})," attribute."]}),"\n",(0,r.jsx)(n.h2,{id:"viewing",children:"Viewing"}),"\n",(0,r.jsx)(n.p,{children:"The metrics and traces can easily be forwarded to a variety of different services as we use OpenTelemetry, such as Honeycomb or Datadog."}),"\n",(0,r.jsxs)(n.p,{children:["To view the data locally, or simply to not use a SaaS offering, you can start up Jaeger and Prometheus placing these three files into a directory then running ",(0,r.jsx)(n.code,{children:"docker compose start"})," while running Bacalhau with the\n",(0,r.jsx)(n.code,{children:"OTEL_EXPORTER_OTLP_PROTOCOL=grpc"})," and ",(0,r.jsx)(n.code,{children:"OTEL_EXPORTER_OTLP_ENDPOINT=http://localhost:4317"})," environment variables."]}),"\n",(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{className:"language-yaml",metastring:'title="docker-compose.yaml"',children:'version: "2"\nservices:\n\n  jaeger-all-in-one:\n    image: "jaegertracing/all-in-one:1.42"\n    restart: "always"\n    ports:\n      - "16686:16686" # Jaeger UI\n      - "14250:14250" # Jaeger gRPC endpoint\n\n  otel-collector:\n    image: "otel/opentelemetry-collector:0.70.0"\n    restart: "always"\n    command: ["--config=/etc/otel-collector-config.yaml"]\n    volumes:\n      - "./otel-collector-config.yaml:/etc/otel-collector-config.yaml"\n    ports:\n      - "8888:8888"   # Prometheus metrics exposed by the collector\n      - "8889:8889"   # Prometheus exporter metrics\n      - "13133:13133" # health_check extension\n      - "4317:4317"   # OTLP gRPC receiver\n    depends_on:\n      - "jaeger-all-in-one"\n      - "prometheus"\n\n  prometheus:\n    container_name: "prometheus"\n    image: "prom/prometheus:v2.42.0"\n    restart: "always"\n    volumes:\n      - "./prometheus.yaml:/etc/prometheus/prometheus.yml"\n    ports:\n      - "9090:9090" # Prometheus UI\n'})}),"\n",(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{className:"language-yaml",metastring:'title="otel-collector-config.yaml"',children:'receivers:\n  otlp:\n    protocols:\n      grpc:\n\nexporters:\n  prometheus:\n    endpoint: "0.0.0.0:8889"\n\n  jaeger:\n    endpoint: jaeger-all-in-one:14250\n    tls:\n      insecure: true\n\nprocessors:\n  batch:\n\nextensions:\n  health_check:\n\nservice:\n  extensions: [health_check]\n  pipelines:\n    traces:\n      receivers: [otlp]\n      processors: [batch]\n      exporters: [jaeger]\n    metrics:\n      receivers: [otlp]\n      processors: [batch]\n      exporters: [prometheus]\n'})}),"\n",(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{className:"language-yaml",metastring:'title="prometheus.yaml"',children:"scrape_configs:\n  - job_name: 'otel-collector'\n    scrape_interval: 10s\n    static_configs:\n      - targets: ['otel-collector:8889']\n      - targets: ['otel-collector:8888']\n"})})]})}function h(e={}){const{wrapper:n}={...(0,o.a)(),...e.components};return n?(0,r.jsx)(n,{...e,children:(0,r.jsx)(d,{...e})}):d(e)}},1151:(e,n,t)=>{t.d(n,{Z:()=>a,a:()=>i});var r=t(7294);const o={},s=r.createContext(o);function i(e){const n=r.useContext(s);return r.useMemo((function(){return"function"==typeof e?e(n):{...n,...e}}),[n,e])}function a(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(o):e.components||o:i(e.components),r.createElement(s.Provider,{value:n},e.children)}}}]);