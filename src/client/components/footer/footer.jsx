import React, { Component } from 'react';
import './footer.css';
import logo from './logo.png';

export default class Footer extends Component {
  render() {
    return (
      <footer className="xf-footer">
        <div className="xf-wrapper">
          <div className="xf-footer__row">
            <div className="xf-footer__logo">
              <div className="xf-footer-logo">
                <i className="fas fa-dove"></i>
                <img className="xf-footer-logo__image" src={logo} alt="Good Price" />
              </div>
            </div>
            <div className="xf-footer__social">
              <ul className="xf-footer-social">
                <li className="xf-footer-social__item _fb">
                  <a className="xf-footer-social__link" href="#" title="Facebook">
                    <svg id="xf-svg__facebook" viewBox="0 0 32 32" width="100%" height="100%">
                      <title>facebook</title>
                      <path
                        d="M7.441 10.251h4.686v-2.583c0-1.474 0.038-3.76 1.112-5.166 1.13-1.539 2.932-2.527 4.965-2.527 0.138 0 0.276 0.005 0.412 0.014 0.265-0.014 0.597-0.022 0.931-0.022 1.861 0 3.667 0.233 5.392 0.67l-1.015 5.088c-0.826-0.241-1.78-0.394-2.764-0.422-1.361 0-2.562 0.48-2.562 1.828v3.12h5.502l-0.384 4.766h-5.339v16.846h-6.254v-16.846h-4.686v-4.766z">
                      </path>
                    </svg>
                  </a>
                </li>
                <li className="xf-footer-social__item _vk">
                  <a className="xf-footer-social__link" href="#" title="ВКонтакте">
                    <svg id="xf-svg__vk" viewBox="0 0 32 32" width="100%" height="100%">
                      <title>vk</title>
                      <path
                        d="M30.657 8.056c0.215-0.725 0-1.245-1.023-1.245h-3.386c-0.031-0.003-0.067-0.004-0.103-0.004-0.629 0-1.166 0.401-1.366 0.961l-0.003 0.010s-1.715 4.187-4.156 6.915c-0.788 0.788-1.149 1.040-1.58 1.040-0.215 0-0.527-0.242-0.527-0.967v-6.71c0-0.861-0.242-1.245-0.967-1.245h-5.321c-0.014-0.001-0.031-0.001-0.047-0.001-0.438 0-0.795 0.345-0.814 0.779v0.002c0 0.815 1.209 1.004 1.345 3.302v4.985c0 1.093-0.198 1.292-0.629 1.292-1.149 0-3.94-4.216-5.597-9.041-0.322-0.936-0.645-1.316-1.512-1.316h-3.386c-0.967 0-1.161 0.455-1.161 0.967 0 0.897 1.149 5.345 5.345 11.228 2.798 4.010 6.748 6.187 10.328 6.187 2.153 0 2.419-0.484 2.419-1.316v-3.038c0-0.967 0.203-1.161 0.885-1.161 0.503 0 1.364 0.242 3.372 2.177 2.298 2.308 2.675 3.338 3.966 3.338h3.386c0.967 0 1.452-0.484 1.173-1.439s-1.4-2.332-2.856-3.969c-0.788-0.933-1.974-1.935-2.332-2.44-0.503-0.646-0.358-0.933 0-1.507 0 0.003 4.124-5.81 4.547-7.781z">
                      </path>
                    </svg>
                  </a>
                </li>
                <li className="xf-footer-social__item _tw">
                  <a className="xf-footer-social__link" href="#" title="Twitter">
                    <svg id="xf-svg__twitter" viewBox="0 0 32 32" width="100%" height="100%">
                      <title>twitter</title>
                      <path
                        d="M32.486 14.978c-0.32 0.046-0.689 0.072-1.065 0.072-0.938 0-1.837-0.162-2.673-0.461 0.069 0.017 0.085 0.018 0.102 0.018 1.507 0 2.817-0.844 3.483-2.085-0.726 0.341-1.592 0.552-2.507 0.552-0.466 0-0.919-0.055-1.353-0.158-0.017-0.26-0.078-0.508-0.14-0.735-0.859-3.169-3.804-5.708-6.888-5.399 0.249-0.103 0.502-0.196 0.757-0.289 0.338-0.114 2.33-0.444 2.017-1.146-0.265-0.619-2.7 0.465-3.159 0.609 0.606-0.227 1.606-0.619 1.714-1.311-0.988 0.15-1.856 0.578-2.545 1.201 0.258-0.255 0.433-0.585 0.49-0.954-2.476 1.57-3.916 4.759-5.085 7.856-0.718-0.755-1.526-1.414-2.41-1.962-2.347-1.275-5.097-2.51-7.941-3.551-0.567 1.126 0.18 2.819 2.33 3.944-0.064-0.002-0.139-0.003-0.214-0.003-0.635 0-1.249 0.088-1.831 0.252 0.324 1.444 1.23 2.652 3.686 3.23-0.034-0.001-0.074-0.002-0.114-0.002-0.826 0-1.574 0.336-2.113 0.879 0.644 1.21 1.897 2.020 3.339 2.020 0.234 0 0.463-0.021 0.685-0.062-2.518 1.087-1.041 3.080 0.99 2.78-1.567 1.62-3.761 2.626-6.19 2.626-2.268 0-4.331-0.877-5.869-2.31 8.187 11.163 25.977 6.601 28.627-4.145 0.108 0.008 0.234 0.013 0.361 0.013 1.378 0 2.623-0.566 3.516-1.478z">
                      </path>
                    </svg>
                  </a>
                </li>
                <li className="xf-footer-social__item _youtube">
                  <a className="xf-footer-social__link" href="#"
                    title="Youtube">
                    <svg id="xf-svg__youtube" viewBox="0 0 32 32" width="100%" height="100%">
                      <title>youtube</title>
                      <path
                        d="M31.7 9.3c-0.2-2.3-2-4.1-4.2-4.2-3.5-0.3-7.5-0.4-11.5-0.4s-8 0.1-11.9 0.4c-1.8 0.1-3.6 1.9-3.7 4.2-0.2 2-0.4 4.3-0.4 6.7s0.1 4.7 0.4 7c0.1 2 1.9 3.8 4.2 4 3.4 0.2 7.4 0.4 11.4 0.4s8-0.1 12-0.4c1.7-0.1 3.5-1.9 3.7-4.2 0.2-2 0.3-4.3 0.3-6.6 0-2.5-0.1-4.7-0.3-6.9zM12.7 20.3v-8.9l8.5 4.5-8.5 4.4z">
                      </path>
                    </svg>
                  </a>
                </li>
                <li className="xf-footer-social__item _ok">
                  <a className="xf-footer-social__link" href="#" title="Одноклассники">
                    <svg id="xf-svg__ok" viewBox="0 0 32 32" width="100%" height="100%">
                      <title>ok</title>
                      <path
                        d="M15.986 0.092c-4.537 0-8.228 3.691-8.228 8.228s3.691 8.228 8.228 8.228c4.537 0 8.228-3.691 8.228-8.228 0.007-4.537-3.684-8.228-8.228-8.228zM15.986 11.726c-1.877 0-3.406-1.529-3.406-3.406s1.529-3.406 3.406-3.406c1.877 0 3.406 1.529 3.406 3.406 0.007 1.877-1.522 3.406-3.406 3.406z">
                      </path>
                      <path
                        d="M19.321 23.26c1.692-0.384 3.307-1.052 4.779-1.977 1.124-0.711 1.465-2.197 0.754-3.321-0.704-1.124-2.197-1.465-3.321-0.761 0 0 0 0 0 0-3.371 2.119-7.708 2.119-11.079 0-1.124-0.711-2.61-0.37-3.321 0.754 0 0 0 0 0 0.007-0.711 1.124-0.37 2.617 0.754 3.321 1.472 0.924 3.086 1.593 4.779 1.977l-4.601 4.601c-0.939 0.939-0.939 2.468 0 3.406s2.468 0.939 3.406 0v0l4.523-4.523 4.523 4.523c0.939 0.939 2.46 0.939 3.406 0 0 0 0 0 0 0 0.939-0.939 0.946-2.46 0.007-3.406 0 0 0 0-0.007-0.007l-4.601-4.594z">
                      </path>
                    </svg>
                  </a>
                </li>
                <li className="xf-footer-social__item _ig">
                  <a className="xf-footer-social__link" href="#" title="Instagram">
                    <svg id="xf-svg__ig" viewBox="0 0 32 32" width="100%" height="100%">
                      <title>ig</title>
                      <path
                        d="M10.668 16c0-2.945 2.387-5.334 5.332-5.334s5.334 2.388 5.334 5.334-2.388 5.334-5.334 5.334-5.332-2.388-5.332-5.334zM7.784 16c0 4.538 3.679 8.216 8.216 8.216s8.216-3.679 8.216-8.216-3.679-8.216-8.216-8.216-8.216 3.679-8.216 8.216zM22.621 7.459c0 1.060 0.859 1.92 1.92 1.92 1.060 0 1.92-0.86 1.92-1.92s-0.859-1.919-1.92-1.919-1.92 0.859-1.92 1.919zM9.536 29.024c-1.56-0.072-2.408-0.33-2.971-0.55-0.748-0.291-1.28-0.637-1.841-1.197-0.559-0.559-0.908-1.092-1.197-1.839-0.22-0.563-0.48-1.412-0.55-2.971-0.078-1.687-0.093-2.193-0.093-6.465s0.017-4.778 0.093-6.465c0.072-1.56 0.332-2.406 0.55-2.971 0.291-0.748 0.637-1.28 1.197-1.841 0.559-0.559 1.092-0.908 1.841-1.197 0.563-0.22 1.412-0.48 2.971-0.55 1.687-0.078 2.193-0.093 6.464-0.093 4.273 0 4.778 0.017 6.465 0.093 1.56 0.072 2.406 0.332 2.971 0.55 0.748 0.289 1.28 0.637 1.841 1.197 0.559 0.559 0.906 1.093 1.197 1.841 0.22 0.563 0.48 1.412 0.55 2.971 0.078 1.688 0.093 2.193 0.093 6.465 0 4.271-0.015 4.778-0.093 6.465-0.072 1.56-0.332 2.408-0.55 2.971-0.291 0.748-0.637 1.28-1.197 1.839s-1.093 0.906-1.841 1.197c-0.563 0.22-1.412 0.48-2.971 0.55-1.687 0.078-2.193 0.093-6.465 0.093-4.271-0.001-4.778-0.017-6.464-0.093zM9.404 0.097c-1.704 0.078-2.866 0.348-3.884 0.744-1.052 0.408-1.944 0.956-2.834 1.846-0.891 0.888-1.439 1.779-1.847 2.833-0.396 1.018-0.666 2.18-0.744 3.884-0.078 1.706-0.096 2.252-0.096 6.597s0.018 4.891 0.097 6.596c0.078 1.704 0.348 2.866 0.744 3.884 0.408 1.052 0.955 1.946 1.846 2.834 0.89 0.89 1.78 1.436 2.834 1.846 1.019 0.396 2.18 0.666 3.884 0.744 1.708 0.078 2.252 0.097 6.596 0.097 4.347 0 4.891-0.018 6.596-0.097 1.704-0.078 2.866-0.348 3.884-0.744 1.052-0.41 1.944-0.956 2.834-1.846s1.436-1.782 1.846-2.834c0.396-1.018 0.667-2.18 0.744-3.884 0.078-1.708 0.096-2.252 0.096-6.596s-0.018-4.891-0.096-6.596c-0.078-1.704-0.348-2.866-0.744-3.884-0.41-1.052-0.956-1.944-1.846-2.834s-1.782-1.437-2.833-1.846c-1.019-0.396-2.181-0.667-3.884-0.744-1.705-0.078-2.25-0.097-6.596-0.097-4.347 0-4.891 0.018-6.597 0.097z">
                      </path>
                    </svg>
                  </a>
                </li>
              </ul>
            </div>
            <div className="xf-footer__payment">
              <ul className="xf-footer-payment">
                <li className="xf-footer-payment__item _mc">
                  <div className="xf-footer-payment__image-mc" aria-label="MasterCard" role="link">
                    <img src="https://www.perekrestok.ru/build/img/svg/mc.svg" alt="mc" />
                  </div>
                </li>
                <li className="xf-footer-payment__item _visa">
                  <div className="xf-footer-payment__image" aria-label="Visa" role="link">
                    <img src="https://www.perekrestok.ru/build/img/svg/visa.svg" alt="visa" />
                  </div>
                </li>
                <li className="xf-footer-payment__item _mir">
                  <div className="xf-footer-payment__image" aria-label="Мир" role="link">
                    <img src="https://www.perekrestok.ru/build/img/svg/mir.svg" alt="mir" />
                  </div>
                </li>
              </ul>
            </div>
          </div>
          <div className="xf-footer__row">
            <p className="xf-footer__copyright">© 1999 – 2019 Goodprice</p>
          </div>
        </div>
      </footer>
    );
  }
}
