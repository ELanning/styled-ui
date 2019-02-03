import React, { PureComponent } from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';
import { resetStyles } from '../utils';
import { thickness, fonts, inputColors, colors } from '../shared-styles';

export { DeprecatedInput as Input };

// Necessary for <Input large ...> backwards compatibility.
DeprecatedInput.propTypes = {
	small: PropTypes.bool,
	medium: PropTypes.bool,
	large: PropTypes.bool,
};

function DeprecatedInput(props) {
	if (props.small) {
		return <Input.Small {...props} />;
	}
	if (props.medium) {
		return <Input.Medium {...props} />;
	}
	if (props.large) {
		return <Input.Large {...props} />;
	}

	return <Input {...props} />;
}

/** Standard text input with no validation */
class Input extends PureComponent {
	static small = 'small';
	static medium = 'medium';
	static large = 'large';

	static Small = props => <Input {...props} size={Input.small} />;
	static Medium = props => <Input {...props} size={Input.medium} />;
	static Large = props => <Input {...props} size={Input.large} />;

	static propTypes = {
		value: PropTypes.string,
		placeholder: PropTypes.string,
		type: PropTypes.string,
		onChange: PropTypes.func,
		onClick: PropTypes.func,
		onKeyPress: PropTypes.func,
		size: PropTypes.oneOf([Input.small, Input.medium, Input.large]),
		styleOverrides: PropTypes.shape({
			width: PropTypes.string,
		}),
	};

	static defaultProps = {
		styleOverrides: {},
		size: Input.medium,
		type: 'text',
		value: '',
		placeholder: '',
	};

	handleChange = event => {
		const { onChange } = this.props;
		if (onChange) {
			onChange(event);
		}
	};

	handleClick = event => {
		const { onClick } = this.props;
		if (onClick) {
			onClick(event);
		}
	};

	handleKeyPress = event => {
		const { onKeyPress } = this.props;
		if (onKeyPress) {
			onKeyPress(event);
		}
	};

	render() {
		const { size, ...inputProps } = this.props;

		const ScaledInput = inputSize[size];
		const props = inputProps || {};

		return (
			<ScaledInput
				onClick={this.handleClick}
				onChange={this.handleChange}
				onKeyPress={this.handleKeyPress}
				{...props}
			/>
		);
	}
}

const StyledInput = styled.input`
	${resetStyles};

	border-radius: 3px;
	border: 1px solid ${inputColors.inputBorderColor};

	padding: ${thickness.eight};
	height: 32px;
	${fonts.ui16};

	width: ${props => props.styleOverrides.width};

	&:focus {
		border-color: ${inputColors.inputFocusedBorderColor};
		box-shadow: 0 0 0 2px ${inputColors.inputFocusedShadowColor};
		outline: 0;
	}

	&:disabled {
		opacity: 0.5;
	}

	&:read-only {
		background: ${colors.gray22};
	}
`;

const inputSize = {
	small: styled(StyledInput)`
		padding: ${thickness.eight};
		height: 32px;
		${fonts.ui16};
	`,
	medium: styled(StyledInput)`
		padding: 12px;
		height: 40px;
		${fonts.ui16};
	`,
	large: styled(StyledInput)`
		padding: 16px;
		height: 46px;
		${fonts.ui16};
	`,
};
