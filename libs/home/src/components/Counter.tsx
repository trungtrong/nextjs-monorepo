"use client";

import { useState } from 'react';
// eslint-disable-next-line @nx/enforce-module-boundaries
import {
    useAppDispatch,
    useAppSelector,
    CounterSelector,
    CounterActions,
} from '../../../shared/store/src';

// eslint-disable-next-line @nx/enforce-module-boundaries
import { Button } from '../../../shared/ui/src/index';
// eslint-disable-next-line @nx/enforce-module-boundaries
import { useInject } from './../../../shared/core/src/injector';
// eslint-disable-next-line @nx/enforce-module-boundaries
import { ImportMetaEnv } from '../../../shared/core/src/models';

export default function Counter() {
    //#region Store
    const dispatch = useAppDispatch();
    const count = useAppSelector(CounterSelector.selectCount);
    //#endregion

    //#region Inject
    const [environment] = useState(useInject<ImportMetaEnv>('environment'))
    //#endregion

    console.log(environment)

    return (
        <div>
            <h1 className="bg-primary-100 m-0.5">
                Welcome react-store {environment.ENV_NAME}
            </h1>

            <div>
                <Button
                    aria-label="Decrement value"
                    onClick={() => dispatch(CounterActions.decrement())}
                >
                    Decrease
                </Button>
                <span aria-label="Count">{count}</span>
                <Button
                    aria-label="Increment value"
                    onClick={() => dispatch(CounterActions.increment())}
                >
                    Increase
                </Button>
            </div>
        </div>
    );
}
