const people = [
    {
        id: 0,
        html: `
        <b> Dirk Witthaut </b><br>
        Jun.-Prof.<br>
        d.witthaut'at'fz-juelich.de<br>
        <br>
        I studied physics in Kaiserslautern and received my PhD in 2007 with a thesis on the dynamics of Bose-Einstein
        condensates. After a period of teaching in Kigali, Rwanda, and research at the Niels Bohr Institute in
        Copenhagen, Denmark, I joined the Max Planck Institute for Dynamics and Self-organization in Goettingen. Since
        2014 I am heading a Helmholtz Young Investigator's Group at Forschungszentrum Juelich and I have been appointed
        Junior Professor in Cologne in 2017.
        `
    },
    {
        id: 1,
        html: `<b> Philipp Böttcher </b><br>
        Postdoctoral Fellow</br>
        p.boettcher'at'fz-juelich.de<br>
        <br>
        I wrote my Bachelor's and Master's thesis in the complex systems lab of Stefan Bornholdt at the University of
        Bremen. In my Bachelor's thesis, I investigated the phase transition of a kinetic variant of the voter-model,
        which is a prototypical opinion formation model. My Master's thesis aimed at explaining the large price
        fluctuations seen for fuel prices using a trust game. Here, the effects of knowledge of the best price and
        spatial constraints were of special interest.
        From June 2016, I worked at the <a href="https://www.dlr.de/ve/en/desktopdefault.aspx/tabid-12472/21440_read-49440/"
          ,="" class="Blau">DLR - Institute of Networked Energy Systems</a> in Oldenburg, where I investigated the
        stability of electricity grids in relation with delayed control.
        I joined the network science group in June of 2020. My current research focus is the stability of electricity
        grids and the analysis of power-system related data.`,
    },
    {
        id: 2,
        html: `<b> Chuck Han</b><br>
        Ph.D. candidate<br>
        ch.han'at'fz-juelich.de<br>
        <br>
        I started my physics career at the University of Iowa, IA, USA. I received my bachelor degrees in applied
        mathematics and physics with a minor in chemistry from there in May 2014. I moved to Bonn to start my master
        study. I have been working with Jun.-Prof. Witthaut since the beginning of 2017. I finished my master thesis in
        July 2018 under the supervision of Jun.-Prof. Witthaut, with the title "Statistical Physics of Economic Network
        Formation and Robustness." Since February 2019, I returned to the group for my Ph.D. project. My current focus is
        on Econo-Physics, more specifically, using network theory to model and understand economic systems.
      `,
    },
    {
        id: 3,
        html: `<b>Franz Kaiser</b><br>
        Ph.D. candidate<br>
        f.kaiser'at'fz-juelich.de<br>
        <br>
        I obtained my bachelor’s degree in physics in 2015 at the University of Göttingen. After one year of studies at
        Lund University in Sweden, I returned to Göttingen to continue my studies as a master’s student with special
        focus on the physics of complex systems and biophysics. In July 2018, I completed my master's degree with
        distinction at the Max Planck Institute for Dynamics and Self-Organisation in Karen Alim's research group working
        on the Kuramoto model on networks. In September 2018, I started my PhD at the Forschungszentrum Jülich working on
        the stability and the extension of power systems both analytically and numerically.
      `,
    },
    {
        id: 4,
        html: `<b>Johannes Kruse</b><br>
        Ph.D. candidate<br>
        jo.kruse'at'fz-juelich.de<br>
        <br>
        I studied physics in Göttingen and obtained my Master's degree in February 2019. During the last year of my
        studies I stayed in Aarhus (Denmark), where I did my Master's thesis in Prof. Martin Greiner's research group.
        Since August 2019, I am a PhD student in FZ Jülich and a part of the Helmholtz School for Data Science in Life,
        Earth and Energy. My goal is to apply methods from Data Science to large, heterogeneous data sets from energy
        systems, such as high-resolution frequency measurements or long wind-power production time series.
      `,
    },
    {
        id: 5,
        html: `<b> Leonardo Rydin</b><br>
        Ph.D. candidate<br>
        leonardo.rydin'at'gmail.com<br>
        <br>
        I obtained my Bachelor in Physics from the University of Lisbon in 2013 and moved on to the University of Bonn to
        obtain a Master’s degree in Physics in 2017. My Master thesis revolved around the emergence of anomalous
        behaviour of coupled-oscillator-system dynamics contingent on the topology of coupled network structures, with
        Prof. Dr. Lehnertz. I joined the Network Science Group for my Ph.D. on stability and operationality of modern-day
        electrical power-grid systems. <br>
        I'll be visiting the <a href="https://www.mn.uio.no/math/english/research/projects/storm/guests/" ,="" class="Blau">Department
          of Mathematics</a>, University of Oslo, from July to December 2019 to work on higher-order stochastic
        processes, under the supervision of Prof. di Nunno, thanks to the <a href="http://www.eon-stipendienfonds.de/" ,=""
          class="Blau">E.ON Stipendienfonds</a>, German-Norwegian Scholarship Programme in "Energy Sciences".
      `,
    },
    {
        id: 6,
        html: `<b> Raphael Biertz</b><br>
        M.Sc. candidate<br>
        r.biertz'at'fz-juelich.de<br>
        <br>
        I am working on a better understanding of the relation between timeseries of powergrid frequencies and timeseries
        of the amount of inertia that is in the system at a specific time. Furthermore I would like to link this to
        electricity price-effects.
        During my Bachelor degree in Cologne I worked for Prof. Sperl (DLR in Cologne) on a simulation of fluidized beds.
        (In case you never heard of <a href="https://youtu.be/My4RA5I0FKs" ,="" class="Blau">fluidized beds</a>).
        My Bachelor thesis was about Keldysh functional formalism and its application to describe polarization effects in
        quantum many-body systems.
      `,
    },
    {
        id: 7,
        html: `<b> Matthias Dahlmanns</b><br>
        M.Sc. candidate<br>
        m.dahlmanns'at'fz-juelich.de<br>
        <br>
        I'm working on congestion models in transport networks and their impact on optimal network geometries.
      `,
    },
    {
        id: 8,
        html: `<b> Galib Hassan</b><br>
        M.Sc. candidate<br>
        g.hassan'at'fz-juelich.de<br>
        <br>
        I did my bachelor in Mathematics at the University of Dhaka, Bangladesh. Currently I am looking at aspects of
        detrented fluctuation analysis and emperical mode decomposition and ways to combine them. For my detailed
        interests, feel free to have a look on my <a href="https://galibhassan0.wixsite.com/galibhassan" ,="" class="Blau">personal
          website</a>.
      `,
    },
    {
        id: 9,
        html: `<b> Lucas Kiefer</b><br>
        M.Sc. candidate<br>
        l.kiefer'at'fz-juelich.de<br>
        <br>
        I'm working on mathematical aspects of voltage stability in complex power grids.
      `,
    },
    {
        id: 10,
        html: `<b> Maurizio Titz</b><br>
        M.Sc. candidate<br>
        m.titz'at'fz-juelich.de<br>
        <br>
        I am studying how line failures in statically n-1 stable power grids can lead to further transient failures. My
        goal is to predict these possible transient failures from the steady states using Machine Learning.
      `,
    },
    {
        id: 11,
        html: `<b> Jonas Wassmer</b><br>
        M.Sc. candidate<br>
        jo.wassmer'at'fz-juelich.de<br>
        <br>
        I completed my bachelor's degree in 2018 at the University of Cologne. In my bachelor thesis I studied the
        correlation behavior of frustrated classical spin systems using Monte Carlo simulations. In October 2019 I
        started my master project at the Forschungszentrum Jülich. In this project I investigate failure spreading in
        complex networks.`,
    },
    {
        id: 12,
        html: ` <b> Eva Mix</b><br>
        Bachelor student<br>
        <br>
        I'm working on time-series analysis for renewable energy generation and electricity prices.
      `,
    },
]