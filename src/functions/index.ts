import axios from 'axios';
import cheerio from 'cheerio';
// import pretty from 'pretty';

const getPopularSites = async (page: number) => {
  try {
    const data: any[] = [];
    const res = await axios.get('https://webflow.com/websites/popular');
    const html = res.data;
    const $ = cheerio.load(html);
    console.log('here');
    $('.showcase-projects-grid__non_empty .showcase-projects-grid__site ng-scope ng-isolate-scope', html).each(() => {
      const title = $(this).text();
      console.log(title);
    });
    return data;
  } catch (e) {
    return `Error fetch popular sites: ${e}`;
  }
};

export { getPopularSites };
