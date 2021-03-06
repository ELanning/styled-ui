import React, { Component } from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';
import { Typeahead } from 'react-bootstrap-typeahead';
import { BootstrapContainer } from './util';
import InferredBase from './inferred-base.jsx';

const StyledTypeahead = styled(({ inferred, ...props }) => <Typeahead {...props} />)`
	.rbt-highlight-text {
		padding: 0;
		font-weight: bold;
		background-color: inherit;
	}

	&& .rbt-input,
	&& .rbt-input:focus {
		${props => (props.inferred ? 'color: #006099' : '')};
	}
`;

export default class InferredTypeahead extends Component {
	static propTypes = {
		/** Decimal percent value for the confidence value. E.g. 0.75 */
		confidence: PropTypes.number,
		/** String to display in the confidence tooltip. Defaults to Heuristic algorithm */
		confidenceSource: PropTypes.string,
		/** Function called when the input value is changed */
		onChange: PropTypes.func,
		/** Function called when the OK button is clicked or an input value is confirmed */
		onConfirm: PropTypes.func.isRequired,
		/** Ignored */
		className: PropTypes.string,
	};

	static defaultProps = {
		confidenceSource: 'Heuristic Algorithm',
	};

	render() {
		const {
			confidence,
			confidenceSource,
			className,
			onConfirm,
			onChange,
			...inputProps
		} = this.props;

		return (
			<BootstrapContainer>
				<InferredBase
					confidence={confidence}
					confidenceSource={confidenceSource}
					onConfirm={onConfirm}
				>
					{props => (
						<StyledTypeahead
							inferred={props.inferred}
							onInputChange={onChange}
							onChange={onChange}
							{...inputProps}
						/>
					)}
				</InferredBase>
			</BootstrapContainer>
		);
	}
}
