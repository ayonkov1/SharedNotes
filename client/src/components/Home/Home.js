import React, { Component, Fragment, useEffect } from 'react';
import { connect } from 'react-redux';
import { LogOut } from '../../actions/UserAction';
import { useHistory } from 'react-router-dom';
import Navbar from '../layouts/Navbar';
import Footer from '../layouts/Footer';
import { getQuestions } from '../../actions/QuestionAction';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faThumbsUp } from '@fortawesome/free-solid-svg-icons';
import { LikeQuestion, UnLikeQuestion } from '../../actions/QuestionAction';

const Home = ({
  Question: { Questions },
  User: { LoggedInUser },
  LogOut,
  getQuestions,
  LikeQuestion,
  UnLikeQuestion,
}) => {
  let history = useHistory();
  useEffect(() => {
    getQuestions();
  }, []);
  return (
    <Fragment>
      <Navbar />
      <div>
        <div class='page-content p-5' id='content'>
          <h2 class='display-4 text-white'>Home</h2>
          <p class='lead text-white mb-0'>
            Find out what people are searching for. Comment and like to help
            people find the right answers and level up.
          </p>

          <div class='row text-white float-center pt-4'>
            <div className='form-group col-md-3'>
              <button className='btn btn-primary rounded-pill btn-block shadow-sm active'>
                All
              </button>
            </div>

            <div className='form-group col-md-3'>
              <button className='btn btn-primary rounded-pill btn-block shadow-sm'>
                Most liked
              </button>
            </div>
            <div className='form-group col-md-3'>
              <button className='btn btn-primary rounded-pill btn-block shadow-sm'>
                Newest
              </button>
            </div>
            <div className='form-group col-md-3'>
              <button className='btn btn-primary rounded-pill btn-block shadow-sm'>
                Refresh
              </button>
            </div>
          </div>
          <div class='separator'></div>

          <div class='bg-shadow rounded overflow-hidden'>
            <div class='py-4 px-0'>
              <div class='row'>
                {Questions.map((question) => {
                  return (
                    <Fragment>
                      <div class='col-sm-6 mt-3'>
                        <div class='card'>
                          <div class='card-body'>
                            <h5 class='card-title'>{question.title}</h5>
                            <p class='card-text'>{question.description}</p>
                            <div></div>
                            <span class='badge badge-primary Likes p-2 mx-2'>
                              {question.liked.length} &nbsp;{' '}
                              <FontAwesomeIcon icon={faThumbsUp} />
                            </span>
                            {question.liked.includes(LoggedInUser._id) ? (
                              <button
                                class='btn btn-danger btn-sm'
                                onClick={() => {
                                  UnLikeQuestion({ QuestionId: question._id });
                                }}
                              >
                                UnLike
                              </button>
                            ) : (
                              <button
                                class='btn btn-primary btn-sm'
                                onClick={() => {
                                  LikeQuestion({ QuestionId: question._id });
                                }}
                              >
                                Like
                              </button>
                            )}

                            <button type='button' class='btn btn-link'>
                              Comment
                            </button>
                            <a
                              href='#'
                              class='btn btn-light btn-sm float-right'
                            >
                              <svg
                                xmlns='http://www.w3.org/2000/svg'
                                width={16}
                                height={16}
                                fill='currentColor'
                                className='bi bi-bookmarks'
                                viewBox='0 0 16 16'
                              >
                                <path
                                  fillRule='evenodd'
                                  d='M2 4a2 2 0 0 1 2-2h6a2 2 0 0 1 2 2v11.5a.5.5 0 0 1-.777.416L7 13.101l-4.223 2.815A.5.5 0 0 1 2 15.5V4zm2-1a1 1 0 0 0-1 1v10.566l3.723-2.482a.5.5 0 0 1 .554 0L11 14.566V4a1 1 0 0 0-1-1H4z'
                                />
                                <path
                                  fillRule='evenodd'
                                  d='M4.268 1H12a1 1 0 0 1 1 1v11.768l.223.148A.5.5 0 0 0 14 13.5V2a2 2 0 0 0-2-2H6a2 2 0 0 0-1.732 1z'
                                />
                              </svg>
                            </a>
                          </div>
                        </div>
                      </div>
                    </Fragment>
                  );
                })}
              </div>
            </div>
          </div>

          <button
            type='button'
            class='form-submit'
            onClick={() => {
              LogOut();
              history.push('/');
            }}
          >
            {' '}
            Log out
          </button>
        </div>
      </div>
      <Footer />
    </Fragment>
  );
};

const MapStateToProps = (state) => ({
  Question: state.Question,
  User: state.User,
});

export default connect(MapStateToProps, {
  LogOut,
  getQuestions,
  LikeQuestion,
  UnLikeQuestion,
})(Home);
