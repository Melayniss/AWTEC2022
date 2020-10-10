<template>
  <div id="local">
    <div>
      <p class="local-title text-center">{{ title }}</p>

      <div
        class="local-block"
        v-for="(item,index) in committeeList"
        :key="index"
      >
        <ul>
          <li>
            <div class="local-photograph">
              <img class="center-block" :src="item.photograph" alt="Committees Partner">
            </div>
            <div class="local-name">
              {{ item.title }}
            </div>
            <div class="local-description">
              <p>{{ item.content }}</p>
            </div>
          </li>
        </ul>
      </div>

    </div>

  </div>
</template>
<script>
export default {
  name: 'CommitteeLocal',
  data() {
    return {
      title: 'Local Committees',
      committeeList: [
        {
          photograph: require("@/assets/img/local_0.jpg"),
          title:
            "Prof. Dahai ZHANG, Zhejiang University",
          content:
            "An outstanding young scientist in the field of ocean science and technology. Served as the deputy secretary general of the Ocean Technology and Equipment Committee of the China Ocean Society, the member of the Ocean Renewable Energy System Committee of the CCICED."
        },
        {
          photograph: require("@/assets/img/local_1.jpg"),
          title:
            "Prof. Wei LI, Zhejiang University",
          content:
            "The executive director of China Renewable Energy Society, director of the Special Committee of Ocean Energy, the expert judge of mechanical subject of the National Natural Science Foundation of China. Having more than 60 authorized invention patents at home and abroad."
        },
        {
          photograph: require("@/assets/img/local_2.jpg"),
          title:
            "Dr. Yulin SI, Zhejiang University",
          content:
            "Mainly engaged in the research on offshore wind energy and marine energy, marine equipment intelligent control etc. He has been the PI for projects from Natural Science Foundation of China, China Shipbuilding Industry Corporation etc."
        },
        {
          photograph: require("@/assets/img/local_3.jpg"),
          title:
            "Dr. Lin CUI, National Ocean Technology Center",
          content:
            "Dr. Cui from National Ocean Technology Center, is the deputy director of the ocean energy research office in National Ocean Technology Center. He is mainly engaged in the R&D and policy studies of ocean wave and tidal energy and their development in China."
        },
        {
          photograph: require("@/assets/img/local_4.jpg"),
          title:
            "Prof. Dezhi NING, Dalian University of Technology",
          content:
            "Mainly engaged in the research on the characteristics of water waves and the interaction between water waves and ocean structures. Ppublished more than 140 academic papers in well-known journals and international conferences at home and abroad."
        },
        {
          photograph: require("@/assets/img/local_5.jpg"),
          title:
            "Prof. Hongda SHI, Ocean University of China",
          content:
            "The dean of Engineering College, Ocean University of China. Mainly engaged in the research on ocean environment hydrodynamics, ocean renewable energy utilization and practical technology development, has been the PI for over 10 scientific research projects."
        },
      ],
    }
  }
}
</script>
<style scoped>
/* local */
#local {
  box-sizing: border-box;
  transition: all ease 0.6s;
}

#local .local-title {
  font-size: 30px;
  color: #134857;
  font-weight: bold;
}

#local .local-block {
  background: #fff;
  padding: 15px;
}

#local .local-photograph img {
  width: 112px;
  height: 150px;
  border: 1px solid #c4d7d6;
}

#local .local-description {
  padding: 20px 0 20px 0;
}

#local .local-name {
  padding-top: 24px;
  font-weight: bold;
  font-style: italic;
  border-bottom: 1px solid #134857;
}

#local li:hover {
  padding: 0 10px 0 10px;
  color: #93b5cf;
  border: 1px solid #93b5cf;
  cursor: pointer;
}

@media screen and (max-width: 768px) {
  #local {
    padding: 30px 0;
    box-sizing: border-box;
    background: #fff;
  }

  #local .local-title {
    font-size: 16px;
    font-weight: bold;
  }

  #local .local-photograph img {
    width: 48px;
    height: 48px;
  }

  #local .local-block {
    padding: 30px;
  }

  #local .local-block > div {
    padding: 30px 0;
  }
}

/* 媒体查询（平板） */
@media screen and (min-width: 768px) and (max-width: 996px) {
  #local .local-title {
    font-size: 24px;
  }
}
</style>

