import Vue from 'vue'
import Router from 'vue-router'
import company_desc from '../components/company/company_desc.vue'
import company from '../components/company/company.vue'
import company_culture from '../components/company/company_culture.vue'
import company_dev from '../components/company/company_dev.vue'
import news_detail from '../components/news/news_detail.vue'
import services from '../components/services/services.vue'
import news_list from '../components/news/news_list.vue'
import index from '../components/index/index.vue'
import contact from '../components/contact/contact.vue'
import case_list from '../components/case/case_list.vue'
import cases from '../components/case/cases.vue'
import case_detail from '../components/case/case_detail.vue'
import team from '../components/team/team.vue'
import news from '../components/news/news.vue'


Vue.use(Router);

export default new Router({
  routes: [
    {
      "name": "index",
      "path": "/index",
      "component": index
    },
    {
      "name": "company",
      "path": "/company",
      "component":company,
      "redirect": {name: 'company_desc'},
      "children": [
        {
          "name": "company_desc",
          "path": "company_desc",
          "component": company_desc
        },
        {
          "name": "company_dev",
          "path": "company_dev",
          "component": company_dev
        },
        {
          "name": "company_culture",
          "path": "company_culture",
          "component": company_culture
        }
      ]
    },
    {
      "name": "news",
      "path": "/news",
      "component": news,
      "redirect": {name: 'news_list'},
      "children": [
        {
          "name": "news_list",
          "path": "news_list",
          "component": news_list
        },
        {
          "name": "news_detail",
          "path": "news_detail",
          "component": news_detail
        }
      ]
    },
    {
      "name": "services",
      "path": "/services",
      "component": services
    },
    {
      "name": "case",
      "path": "/case",
      "component":cases,
      "redirect": {name: 'case_list'},
      "children": [
        {
          "name": "case_list",
          "path": "case_list",
          "component": case_list
        },
        {
          "name": "case_detail",
          "path": "case_detail",
          "component": case_detail
        }
      ]
    },
    {
      "name": "team",
      "path": "/team",
      "component": team
    },
    {
      "name": "contact",
      "path": "/contact",
      "component": contact
    }
  ]
})
