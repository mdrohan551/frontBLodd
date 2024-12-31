import React from 'react';

const Loading = () => {
    return (
        <div className="containr ">

            <div className="row">
                {
                    Array.from({length: 12}).map(() => {
                        return (
                            <main className="aph container col-lg-3">
                                <my-event-placeholder className="my-event-placeholder">
                                    <div className="my-event-placeholder__container">
                                        <div
                                            className="my-event-placeholder__poster my-event-placeholder-radius bg-color-animated"></div>
                                        <div className="my-event-placeholder__content">
                                            <div
                                                className="my-event-placeholder__content__title my-event-placeholder-radius bg-color-animated"></div>
                                            <div
                                                className="my-event-placeholder__content__description my-event-placeholder-radius bg-color-animated"></div>
                                            <div
                                                className="my-event-placeholder__content__address my-event-placeholder-radius bg-color-animated"></div>
                                            <div
                                                className="my-event-placeholder__content__action bg-color-animated"></div>
                                        </div>
                                    </div>
                                    <div className="my-event-placeholder__footer">
                                        <div
                                            className="my-event-placeholder__footer__item my-event-placeholder-radius bg-color-animated"></div>
                                        <div
                                            className="my-event-placeholder__footer__item my-event-placeholder-radius bg-color-animated"></div>
                                        <div
                                            className="my-event-placeholder__footer__item my-event-placeholder-radius bg-color-animated"></div>
                                        <div
                                            className="my-event-placeholder__footer__item my-event-placeholder-radius bg-color-animated"></div>
                                    </div>
                                </my-event-placeholder>
                            </main>
                        )
                    })
                }
            </div>
        </div>
    );
};

export default Loading;