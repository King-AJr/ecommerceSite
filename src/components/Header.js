import { useState, useEffect } from "react";
import usdFlag from "../assets/images/usd_flag.png";
import euroFlag from "../assets/images/euro_flag.png";
import gbpFlag from "../assets/images/gbp_flag.png";

const Header = () => {
  const [ curIsOpen, setCurIsOpen] = useState(false);
  const [ langIsOpen, setLangIsOpen] = useState(false);
  const [selectedCurrency, setSelectedCurrency] = useState('USD');
  const [selectedLanguage, setSelectedLanguage] = useState('Eng');
  const [flagUrl, setFlagUrl] = useState('');

  useEffect(() => {
    // Function to get the flag URL based on the currency code
    const getFlagUrl = (currencyCode) => {
      switch (currencyCode) {
        case 'USD':
          return usdFlag
        case 'GBP':
          return gbpFlag
          case 'EUR':
            return euroFlag
        default:
          return null; 
      }
    };

    // Get the flag URL based on the selected currency
    const url = getFlagUrl(selectedCurrency);
    setFlagUrl(url);
  }, [selectedCurrency]);

  const curToggleDropdown = () => {
    setCurIsOpen(! curIsOpen);
  };

  const LangToggleDropdown = () => {
    setLangIsOpen(! langIsOpen);
  };

  const handleCurrencySelect = (currency) => {
    setSelectedCurrency(currency);
    setCurIsOpen(false);
  };

  const handleLanguageSelect = (language) => {
    setSelectedLanguage(language);
    setLangIsOpen(false);
  };

    return (
        <div className="h-24 w-full font-inter bg-blue-200 text-xs flex">
          
          {/* first header row */}
          <div className="w-full flex justify-between p-5">   
            {/* hotline and number */}
            <div className="flex">
              <div className="h-4 w-24   bg-grey rounded overflow-hidden flex items-center justify-center">
                <p className="whitespace-no-wrap overflow-hidden">Hotline 24/7</p>
              </div>
              <p className="  pl-4"> (025) 3886 25 16</p>
            </div>
            <div className="flex">
                <p className=" ">Sell on Swoo</p>
                <p className="  pl-4">Order Tracki</p>
                <div className="relative pl-12" id="currency-toogle">
                {/* Button to toggle dropdown */}
                <button
                  onClick={curToggleDropdown}
                  className="focus:outline-none"
                >
                  {selectedCurrency}
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className="h-5 w-5 ml-2 inline-block"
                    viewBox="0 0 20 20"
                  >
                    <path
                      fillRule="evenodd"
                      d="M10 12a1 1 0 0 1-.707-.293l-5-5a1 1 0 1 1 1.414-1.414L10 10.586l4.293-4.293a1 1 0 0 1 1.414 1.414l-5 5A1 1 0 0 1 10 12z"
                    />
                  </svg>
                </button>

                {/* Dropdown menu */}
                { curIsOpen && (
                  <div className="absolute z-10 mt-2 w-48 bg-white rounded-lg shadow-md">
                    <ul>
                      <li
                        className="py-2   px-4 cursor-pointer"
                        onClick={() => handleCurrencySelect('USD')}
                      >
                        USD
                      </li>
                      <li
                        className="py-2   px-4 cursor-pointer"
                        onClick={() => handleCurrencySelect('EUR')}
                      >
                        EUR
                      </li>
                      <li
                        className="py-2   px-4 cursor-pointer"
                        onClick={() => handleCurrencySelect('GBP')}
                      >
                        GBP
                      </li>
                      {/* Add more currency options as needed */}
                    </ul>
                  </div>
                )}
              </div>
              <div className="border-l border-gray-400 h-5 w-2"></div>
              <div className="rounded-full w-4 h-4 bg-gray-200 flex items-center justify-center">
                {flagUrl && <img src={flagUrl} alt={selectedCurrency} className="w-full h-full object-cover rounded-full" />}
            </div>
            <div className="relative pl-4" id="language-toogle">
                {/* Button to toggle dropdown */}
                <button
                  onClick={LangToggleDropdown}
                  className="focus:outline-none"
                >
                  {selectedLanguage}
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className="h-5 w-5 ml-2 inline-block"
                    viewBox="0 0 20 20"
                  >
                    <path
                      fillRule="evenodd"
                      d="M10 12a1 1 0 0 1-.707-.293l-5-5a1 1 0 1 1 1.414-1.414L10 10.586l4.293-4.293a1 1 0 0 1 1.414 1.414l-5 5A1 1 0 0 1 10 12z"
                    />
                  </svg>
                </button>

                {/* Dropdown menu */}
                { langIsOpen && (
                  <div className="absolute z-10 mt-2 w-48 bg-white rounded-lg shadow-md">
                    <ul>
                      <li
                        className="py-2   px-4 cursor-pointer"
                        onClick={() => handleLanguageSelect('Eng')}
                      >
                        Eng
                      </li>
                      <li
                        className="py-2   px-4 cursor-pointer"
                        onClick={() => handleLanguageSelect('GERM')}
                      >
                        Germ
                      </li>
                      <li
                        className="py-2   px-4 cursor-pointer"
                        onClick={() => handleLanguageSelect('FR')}
                      >
                        FR
                      </li>
                      {/* Add more currency options as needed */}
                    </ul>
                  </div>
                )}
              </div>
            </div>
          </div>

          {/* second header row */}
          <div>
    
          </div>
        </div>
      );
}

export default Header;