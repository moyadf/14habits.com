import React from 'react';
import i18n from '../lib/i18n';

class FreeChapter extends React.Component {
  render() {
    i18n.locale = this.props.locale;

    return <div className="bg-white">
      <div className="max-w-screen-xl mx-auto px-4 py-12 sm:px-6 md:py-16 md:px-8">
        <div className="px-6 py-6 bg-book-yellow rounded-lg md:py-12 md:px-12 lg:py-16 lg:px-16 md:flex md:items-center">
          <div className="md:w-0 md:flex-1">
            <h2 className="text-2xl leading-8 font-extrabold tracking-tight text-book-gray sm:text-3xl sm:leading-9">
              {i18n.t('freeChapter.title')}
            </h2>
            <p className="mt-3 max-w-3xl text-lg leading-6 text-gray-900">
              {i18n.t('freeChapter.description')}
            </p>
          </div>
          <div className="mt-8 md:mt-0 md:ml-8">
            <div className="mt-3 rounded-md shadow sm:mt-0 sm:ml-3">
              <a download href={i18n.t('freeChapter.url')} className="w-full md:w-auto float-none text-center block md:float-right px-6 py-4 border border-transparent text-base leading-6 font-medium rounded-md text-book-yellow bg-book-gray hover:bg-gray-800 focus:outline-none focus:bg-gray-800 transition duration-300 ease-in-out">
                {i18n.t('freeChapter.cta')}
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  }
}

export default FreeChapter;