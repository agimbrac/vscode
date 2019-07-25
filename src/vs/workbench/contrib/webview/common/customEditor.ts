/*---------------------------------------------------------------------------------------------
 *  Copyright (c) Microsoft Corporation. All rights reserved.
 *  Licensed under the MIT License. See License.txt in the project root for license information.
 *--------------------------------------------------------------------------------------------*/

import { URI } from 'vs/base/common/uri';
import { createDecorator } from 'vs/platform/instantiation/common/instantiation';


export const ICustomEditorService = createDecorator<ICustomEditorService>('customEditorService');

/**
 * Handles the creation of webview elements.
 */
export interface ICustomEditorService {
	_serviceBrand: any;

	getCustomEditorsForResource(resource: URI): Promise<readonly CustomEditorInfo[]>;
}

export interface CustomEditorInfo {
	readonly id: string;
	readonly displayName: string;
}
